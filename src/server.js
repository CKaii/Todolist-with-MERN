const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(expres.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
  console.log('Server started on port 3000');
})
