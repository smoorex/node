class Page {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.articles = [];
    }

    addArticle(article) {
        this.articles.push(article);
    }

    render() {
        let pageContent = `<div class="container">`;
        pageContent += `<h1 class="display-4">${this.title}</h1>`;
        pageContent += `<p class="lead">${this.content}</p>`;
        this.articles.forEach(article => {
            pageContent += `<div class="card">`;
            pageContent += `<div class="card-body">`;
            pageContent += `<h2 class="card-title">${article.title}</h2>`;
            pageContent += `<p class="card-text">${article.content}</p>`;
            pageContent += `<p class="card-text"><small class="text-muted">${article.publishDate}</small></p>`;
            pageContent += `</div>`;
            pageContent += `</div>`;
        });
        pageContent += `</div>`;
        return pageContent;
    }
}

module.exports = Page;
