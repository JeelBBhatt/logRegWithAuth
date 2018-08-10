const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let {mongoose}=require('./config/db');
let User = require('./model/user')
var app = express();
var port =process.env.PORT | 4600;

app.use(bodyParser.json())
app.use(cors());

app.post('/users/signup', (req,res)=>{
  var user = new User(req.body);
  user.save().then(()=>{
    res.status(200);
    console.log('User Registered Successfully');
  },
    (err) =>{
    console.log('Error while adding User', err);
    })
});
app.post('/users/login', (req,res)=>{
  User.findOne({
    email: req.body.email,
    password: req.body.password
  }).then((user)=>{
    if(!user){
      res.status(404).send('Invalid usename or password');
    }
    res.send(user._id).status(200);
  }).catch((e)=>{
    res.status(400).send();
  })
});
app.get('/users/:id', (req,res)=>{
  User.findById(req.params.id).then((user)=>{
    if(!user){
      res.status(404).send('User not available');
    }
    res.send(user).status(200);
  }).catch((e)=>{
    res.status(400).send();
  })
});
app.listen(port,()=>{
  console.log('server running on ',port)
});
