const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/User');

app.use(express.json());
app.use(cors());

app.get('/api/users', function(req, res){
  User.find()
  .then(data => {
    res.status(200).json(data);
  })
})

app.get('/api/users/:id', function(req, res){
  User.findOne(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
})

app.post('/api/users', (req, res) => {
  const {name, email} = req.body;
  User.create({name, email})
  .then(data => {
    res.status(201).json(data);
  })
})

app.listen(8000, function(){
    console.log('Server is running');
});
