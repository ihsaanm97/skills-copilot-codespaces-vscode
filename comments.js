// Create web server and listen to port 3000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const { email, comment } = req.body;
  comments.addComment(email, comment);
  res.status(201).end();
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});