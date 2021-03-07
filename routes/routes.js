const { Router } = require('express');
const { User, Messages } = require('../models/userMsgDB');
const router = Router();

function checkLogin(req, res, next) {
  if (req.session.user == null){
    res.redirect('login');
  }
  next();
}

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/chats', checkLogin,(req, res) => {
  res.render('chats');
});

router.get('/:id', (req,res)=>{
  const id = req.params.id;
  if(id != undefined){
    res.render('error')
  }
}); 

router.get('/error',(req, res) => {
  res.render('error');
});

module.exports = router;