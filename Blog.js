class Blog {
    constructor(title, introduction) {
        this.title = title;
        this.introduction = introduction;
        this.pages = [];
        this.articles = [];
    }

    addPage(page) {
        this.pages.push(page);
    }

    addArticle(article) {
        this.articles.push(article);
    }

    displayHomePage() {
        console.log(`Welcome to ${this.title}`);
        console.log(`Introduction: ${this.introduction}`);
        console.log("\nLatest News:");
        this.articles.forEach((article, index) => {
            console.log(`${index + 1}. ${article.title}`);
        });
    }

    displayArticleDetails(articleIndex) {
        const article = this.articles[articleIndex];
        if (article) {
            console.log(`\n${article.title}:\n${article.content}`);
        } else {
            console.log("Article not found.");
        }
    }
}

module.exports = Blog;
