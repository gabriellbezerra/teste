// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3300;
const routes = require('./routes.js');

// Conectando ao banco de dados (opcional, se não estiver feito em outro lugar)
// ...

// Utilizando o middleware de roteamento
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', routes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});