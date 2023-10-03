const express = require("express");
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.get('/home', (req, res)=>{
    res.render('indexlanding')
});

app.listen(3000,function(){
    console.log("Servidor rodando na url http://localhost:3000")
});
