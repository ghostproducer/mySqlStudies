const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');


//configurando o body parser para pegar POSTS nos formatos ulrEncoded e JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');


function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     :  3306,
      user     : 'root',
      password : 'password',
      database : 'wm'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) {
          res.json(error);
          console.log('error = !',error);
        }
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
}

// Exibe todos os clientes na url localhost:3000/clientes
router.get('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM Clientes', res);
});

// Exibe informacoes individuais na url localhost:3000/clientes/1 ou 2 ou 3 ...
router.get('/clientes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Clientes' + filter, res);
});

// Criando rota de Delete dentro para o localhost:3000/clientes/1
router.delete('/clientes/:id', (req, res) =>{
    execSQLQuery('DELETE FROM Clientes WHERE ID=' + parseInt(req.params.id), res);
});


// Criando rota de post pra adicionar cliente na rota localhost:3000/clientes
router.post('/clientes', (req, res) =>{
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
});

// Criando rota pra dar Update no localhost:3000/clientes/1
router.patch('/clientes/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
})