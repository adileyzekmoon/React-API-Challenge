const express = require('express');
const router = express.Router();
var User = require('../models/user');

router.get('/store', (req, res, next) => {
  User.find((err, user) => {
//    if(err)
//      res.send(err);
    User.find((err,user) => {
        if(err){
            res.send(err);
        }
         res.json(user);
        });
      
//    res.send("Hello bitch");
  });
});

router.post('/store', (req, res) => {
    User.find((err,user) => {
        if(err){
            res.send(err);
        }
        res.json({message: "Hello there"});   
        });
});

router.post('/add', (req, res) => {
  let data = new User();

  const { url } = req.body;

  data.url = url;

  data.save((err) => {
    if(err)
      return res.json({ success: false, error: err });

    return res.json({ success: true });
  })
});

module.exports = router
