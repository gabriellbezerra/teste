const express = require('express');
const router = express.Router();
const responsavelController = require('./controller/responsavelController.js');

// Criar um novo responsável
router.post('/resp/c/', responsavelController.criarResponsavel);

// Buscar todos os responsáveis
router.get('/resp/', responsavelController.buscarTodosResponsaveis);

// Buscar um responsável por ID
router.get('/resp/:id', responsavelController.buscarResponsavelPorId);

// Atualizar um responsável por ID
//router.put('/resp/:id', (req, res) => {res.json({requestBody: req.body})});
router.put('/resp/:id', responsavelController.atualizarResponsavel);

// Excluir um responsável por ID
router.delete('/resp/:id', responsavelController.excluirResponsavel);

module.exports = router;