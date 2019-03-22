var express = require('express');
var router = express.Router();
var Product= require('../models/product');
var csrf=require('csurf');
var passport=require('passport');

router.get('/signup',function(req, res, next){
var messages=req.flash('error');
res.render('user/signup',{csrfToken: req.csrfToken(),messages:messages,hasErrors:messages.lenght>0});
});
router.post('/signup',passport.authenticate('local.signup', {
successRedirect:'user/profile',
failureRedirect:'/user/signup',
failureFlash:true
}));
router.get('/profile',function(req,res,next){
res.render('user/profile');
});
router.get('/signin',function(req,res,next){
var messages=req.flash('error');
res.render('user/signin',{csrfToken: req.csrfToken(),messages:messages,hasErrors:messages.lenght>0});
});
router.post('/signin',passport.authenticate('local.signin', {
successRedirect:'user/profile',
failureRedirect:'/user/signin',
failureFlash:true
}));
module.exports = router;
 