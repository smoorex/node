class Article {
    constructor(title, content, publishDate, subtitles = [], imageUrl = null, mainText = "", imageAltTag = "", imageTitle = "", internalLinks = [], externalLinks = [], author = "", contributingAuthors = []) {
        this.title = title;
        this.content = content;
        this.publishDate = publishDate;
        this.subtitles = subtitles;
        this.imageUrl = imageUrl;
        this.mainText = mainText;
        this.imageAltTag = imageAltTag;
        this.imageTitle = imageTitle;
        this.internalLinks = internalLinks;
        this.externalLinks = externalLinks;
        this.author = author;
        this.contributingAuthors = contributingAuthors;
    }

    render() {
        let articleContent = `<div class="card mb-3">`;
        articleContent += `<div class="card-body">`;
        articleContent += `<h2 class="card-title">${this.title}</h2>`;
        articleContent += `<p class="card-text">${this.content}</p>`;
        articleContent += `<p class="card-text"><small class="text-muted">${this.publishDate}</small></p>`;
        // Add more Bootstrap classes as needed for other elements
        articleContent += `</div>`;
        articleContent += `</div>`;
        return articleContent;
    }
}

module.exports = Article;
