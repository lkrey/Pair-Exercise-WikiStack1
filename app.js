const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const servestatic = require('serve-static');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

const { db, Page, User } = require('./models');
const app = express();

app.use('/wiki',wikiRouter);
app.use('/user',userRouter);

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/',(req,res)=>{
  res.redirect('/wiki');
})

const PORT = 3000;

async function init() {
  try{
    await db.sync({force: true});
  }
  catch(err){
    console.error(err);
  }
}

init();

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

