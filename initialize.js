// initialize.js

const Page = require('./Page');
const Article = require('./Article');
const Blog = require('./Blog');

// Define articles
const valorantNews = new Article("Valorant News", "Latest updates and events in Valorant.", "2024-04-20");
const fortniteNews = new Article("Fortnite News", "Stay updated with the latest from Fortnite.", "2024-04-21");
const codNews = new Article("Call of Duty News", "All about Call of Duty: Modern Warfare.", "2024-04-22");
const xdefiantNews = new Article("XDefiant News", "Exciting news about XDefiant.", "2024-04-23");

// Define pages
const homePage = new Page("Home", "Welcome to My Gaming Blog!");
const valorantPage = new Page("Valorant", "Stay informed with Valorant news.");
const fortnitePage = new Page("Fortnite", "Get the latest scoop on Fortnite.");
const codPage = new Page("Call of Duty", "All things Call of Duty: Modern Warfare.");
const xdefiantPage = new Page("XDefiant", "Discover the latest about XDefiant.");

// Populate pages with articles
valorantPage.addArticle(valorantNews);
fortnitePage.addArticle(fortniteNews);
codPage.addArticle(codNews);
xdefiantPage.addArticle(xdefiantNews);

// Create a blog instance
const myBlog = new Blog("Gaming News", "Welcome to my blog!");

// Add pages and articles to the blog
myBlog.addPage(homePage);
myBlog.addPage(valorantPage);
myBlog.addPage(fortnitePage);
myBlog.addPage(codPage);
myBlog.addPage(xdefiantPage);

// Export the blog instance
module.exports = myBlog;
