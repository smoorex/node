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
        let pageContent = `<h1>${this.title}</h1>`;
        pageContent += `<p>${this.content}</p>`;
        this.articles.forEach(article => {
            pageContent += `<h2>${article.title}</h2>`;
            pageContent += `<p>${article.content}</p>`;
            pageContent += `<p>Published on: ${article.publishDate}</p>`;
        });
        return pageContent;
    }
}

module.exports = Page;
