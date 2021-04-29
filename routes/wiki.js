const express = require('express');
const router = express.Router();
const { db, Page, User } = require('../models/');
const {addPage} = require('../views');

router.get('/', async (req,res,next) => {
  // const pages = await Pages.findAll(Page);
  res.send('<h1>Hey</h1>');
})

router.post('/', async (req, res, next)=>{
  // res.json(req.body);
  const title = req.body.title;
  const slug = req.body.slug;
  const content = req.body.content;
  const status = req.body.status;

  try{
    console.log(req.body)
    // const newPost = await Page.create({
    //   title: title,
    //   slug: slug,
    //   content: content,
    //   status: status
    // });
    res.redirect('/');
  }catch(error){
    next(error);
  }
})

router.get('/add', async (req, res, next)=>{
  res.send(addPage())
})

module.exports = router;
