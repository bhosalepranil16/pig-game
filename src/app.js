const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 8080;

const publicDirectoryPath = path.join(__dirname,'../public');

app.set('view engine','hbs');
app.use(express.static(publicDirectoryPath));

app.get('',(req,res)=>{
    res.render('index');
})

app.listen(port,(req,res)=>{
    console.log('ON');
});