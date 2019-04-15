const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();

app.use(expres.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

const Schema = mongoose.Schema

let Todo = new Schema({
  todo_description: {
    type: String
  },
  todo_responsible: {
    type: String
  },
  todo_priority: {
    type: String
  },
  todo_completed: {
    type: Boolean
  }
})

module.exports = mongoose.model('Todo', Todo);

app.listen(3000, function() {
  console.log('Server started on port 3000');
})
