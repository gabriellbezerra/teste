const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', //pode ser vazio ou root, depende da instalação do mysql.
    database: 'rotas',
    port: '3306'
});

connection.connect(function(err){ //o err é opcional, é usado para receber o erro caso a conexão de algum erro.
    console.log("Conectado com sucesso ao banco de dados!");
});

module.exports = connection;