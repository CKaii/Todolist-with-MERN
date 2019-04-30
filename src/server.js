const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
const todoRoutes = express.Router();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use('/todos', todoRoutes);

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

todoRoutes.route('/').get(function(req, res) {
  Todo.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route('/:id').get(function(req, res) {
  const id = req.params.id;
  Todo.findById(id, function(err, todo) {
    res.json(todo);
  });
});

todoRoutes.route('/add').post(function(req, res) {
  const todo = newTodo(req.body);
  todo.save()
  .then(todo => {
    res.status(200).json({'todo': 'todo added successfully'
  })
  .catch(err => {
    res.status(400).send('adding new todo failed');
  })
  })
})

todoRoutes.route('update/:id').post(function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    if(!todo) {
      res.status(404).send('data is not found');
    } else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_responsible;
      todo.todo_completed = req.body.todo_completed;
    }
    todo.save().then(todo => {
      res.json('Todo updated!');
    })
    .catch(err => {
      res.status(400).send('Update not possible');
    });
  });
});

app.listen(3001, function() {
  console.log('Server started on port 3001');
})
