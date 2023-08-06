// app.js

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));//The bodyParser.urlencoded() middleware is used to parse form data submitted via POST requests. The extended: true option allows parsing of nested objects.
app.set('view engine', 'ejs');//The app.set('view engine', 'ejs') line sets EJS as the template engine so that we can use .ejs files as our view templates.


// In-memory data store for saved searches
const savedSearches = [];

// Routes
app.get('/', (req, res) => {
  res.render('index', { savedSearches });
});

app.post('/search', (req, res) => {
  const { searchQuery } = req.body;
  if (searchQuery) {
    savedSearches.push(searchQuery);
  }
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
