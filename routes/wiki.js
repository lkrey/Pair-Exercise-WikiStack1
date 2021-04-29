const express = require('express');
const router = express.Router();
const { db, Page, User } = require('../models/');
const {addPage} = require('../views');

router.get('/', async (req,res,next) => {
  // const pages = await Pages.findAll(Page);
  res.send('<h1>Hey</h1>');
})

router.post('/', async (req,res,next)=>{
  try{
    const newPost = await Page.create({
      title: req.body.title,
      slug: req.body.slug,
      content: req.body.content,
      status: req.body.status
    });
  }catch(error){
    next(error);
  }
})

router.get('/add', async (req,res,next)=>{
  res.send(addPage())
})

module.exports = router;
