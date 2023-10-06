//Imports
const express = require("express");
const app = express();
const path = require('path');
const connection = require('./database/database');
const bodyParser = require('body-parser');
const Usuarios = require("./database/usuarios");

app.use(bodyParser.urlencoded({extended: false}));

//Conectando ao banco de dados
(async () => {  
    const database = require('./database/database');
    const usuarios = require('./database/usuarios');
    try {
        console.log("Conectando ao banco de dados");
    } catch (error) {
        console.log(error);
    }
})();

//Definindo o ejs como view engine e a pasta public como pasta de arquivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

//Rotas
app.get('/home', (req, res)=>{
    res.render('landing')
});

app.get('/login', (req, res)=>{
    res.render('login')
});

app.get("/Cadastro", (req, res)=>{
    res.render('cadastro')
});

//Methodo post para a rota de cadastro

app.post("/cadastrar", (req, res)=>{
    const { nome,email,senha} = req.body;
    Usuarios.create({
        nome: nome,
        email: email,
        senha: senha
    }).then(()=>{
        console.log('usuario registrado');
        res.redirect('/login');
    })
});

//Iniciando o servidor
app.listen(3000,function(){
    console.log("Servidor rodando na url http://localhost:3000")
});

