const { Router } = require('express');
const { User, Messages } = require('../models/userMsgDB');
const router = Router();

function checkLogin(req, res, next) {
  if (req.session.user == null){
    res.redirect('login');
  }
  res.locals.user = req.session.user;
  next();
}

router.get('/', (req, res) => {
  res.redirect('login');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/chats', [checkLogin], async (req, res) => {
  const user = await User.findAll();
  console.log(user.name)
  console.log(req.session.user)
  res.render('chats', user);
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