// Article.js

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
}

module.exports = Article;
