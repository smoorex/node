const express = require('express');
const bodyParser = require('body-parser');
const Blog = require('./Blog');
const initializeBlog = require('./initialize');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Instantiate the blog
const myBlog = initializeBlog;

// Function to render navigation links
function renderNavigation() {
    let navigationHTML = '<ul>';
    myBlog.pages.forEach(page => {
        navigationHTML += `<li><a href="/${page.title.toLowerCase()}">${page.title}</a></li>`;
    });
    navigationHTML += '</ul>';
    return navigationHTML;
}

// Route to render the home page of the blog
app.get('/', (req, res) => {
    // Render the home page content
    res.send(`<h1>Welcome to ${myBlog.title}</h1>
              <p>${myBlog.introduction}</p>
              <h2>Navigation</h2>
              ${renderNavigation()}
              <h2>Latest News:</h2>
              ${renderArticles(myBlog.articles)}`);
});

// Route to render each page of the blog
app.get('/:pageName', (req, res) => {
    const pageName = req.params.pageName.toLowerCase();
    const page = myBlog.pages.find(page => page.title.toLowerCase() === pageName);
    if (page) {
        res.send(`<h1>${page.title}</h1>
                  <p>${page.content}</p>
                  <h2>Navigation</h2>
                  ${renderNavigation()}
                  ${renderArticles(page.articles)}`);
    } else {
        res.status(404).send('Page not found');
    }
});

// Function to render articles
function renderArticles(articles) {
    let articleHTML = '';
    articles.forEach(article => {
        articleHTML += `<h3>${article.title}</h3>
                        <p>${article.content}</p>
                        <p>Published on: ${article.publishDate}</p>`;
    });
    return articleHTML;
}

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
