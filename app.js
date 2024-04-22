const express = require('express');
const bodyParser = require('body-parser');
const Blog = require('./Blog');
const initializeBlog = require('./initialize');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));


// Instantiate the blog
const myBlog = initializeBlog;

// Function to render navigation links
function renderNavigation() {
    let navigationHTML = '<ul class="navbar-nav mr-auto">';
    myBlog.pages.forEach(page => {
        navigationHTML += `<li class="nav-item"><a class="nav-link" href="/${page.title.toLowerCase()}">${page.title}</a></li>`;
    });
    navigationHTML += '</ul>';
    return navigationHTML;
}

// Route to render the home page of the blog
app.get('/', (req, res) => {
    // Render the home page content
    res.send(`
        <div class="container">
            <h1 class="display-4">Welcome to ${myBlog.title}</h1>
            <p class="lead">${myBlog.introduction}</p>
            <h2>Navigation</h2>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                ${renderNavigation()}
            </nav>
            <h2>Latest News:</h2>
            ${renderArticles(myBlog.articles)}
        </div>
    `);
});

// Route to render each page of the blog
app.get('/:pageName', (req, res) => {
    const pageName = req.params.pageName.toLowerCase();
    const page = myBlog.pages.find(page => page.title.toLowerCase() === pageName);
    if (page) {
        res.send(`
            <div class="container">
                <h1 class="display-4">${page.title}</h1>
                <p class="lead">${page.content}</p>
                <h2>Navigation</h2>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    ${renderNavigation()}
                </nav>
                ${renderArticles(page.articles)}
            </div>
        `);
    } else {
        res.status(404).send('Page not found');
    }
});

// Function to render articles
function renderArticles(articles) {
    let articleHTML = '';
    articles.forEach(article => {
        articleHTML += `
            <div class="card mb-3">
                <div class="card-body">
                    <h2 class="card-title">${article.title}</h2>
                    <p class="card-text">${article.content}</p>
                    <p class="card-text"><small class="text-muted">Published on: ${article.publishDate}</small></p>
                </div>
            </div>
        `;
    });
    return articleHTML;
}

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
