const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');


app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', express.static(__dirname + "/public/"));

app.use('/contato', function (req, res, next) {
    let nome = req.body.nome_campo;
    let email = req.body.email_campo;
    let descricao = req.body.campo_descricao;
    if (nome === "" || email === "" || descricao === "") {
        res.send("<center><h3>Por favor preencha todos os campos</h3><button onclick=\"window.location.href = '/contato'\">Voltar</button></center>");
    } else {
        next();
    }
});

app.post('/contato', (req, res) => {
    res.send("<center><h3>Olá " + req.body.nome_campo + "</h3><br><br> <p></p>você receberá nosso contato no email " + req.body.email_campo + "</p><button onclick=\"window.location.href = '/'\">Voltar</button></center>");
})

app.get('*', (req, res) => {
    res.send("<h3>Link invalido: 404</h3><br><button onclick=\"window.location.href = '/'\">Voltar</button>");
});
app.listen(3000, () => console.log("Servidor escutando a porta 3000"));