const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const servestatic = require('serve-static');

const app = express();

app.get('',(req,res)=>{
  res.send('');
})
