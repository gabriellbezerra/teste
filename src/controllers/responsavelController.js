const responsavelService = require('../services/responsavelService.js')

module.exports = {

  buscarTodosResponsaveis : async (req, res) => {
    const responsaveis = await responsavelService.buscarTodos();
    res.json(responsaveis); 
  },

  buscarResponsavelPorId : async (req, res) => {
    let id = req.params.id;
    const responsavel = await responsavelService.buscarPorIp(id);

    if (responsavel) {
      return res.json(responsavel[0]);
    }

    res.json({ mensagem: 'Responsável não encontrado' });
  },

  criarResponsavel : async (req, res) => {
    const nome = req.body.Nome;
    const codEmpresa = parseInt(req.body.CodEmpresa);

    // Validação dos dados
    if (!nome) {
      if (codEmpresa === null || !Number.isInteger(codEmpresa)){
        return res.json({ mensagem: 'Dados inválidos' });
      }
    }

    // Inserindo o responsável no banco de dados
    const result = await responsavelService.criarResp(nome, codEmpresa);
    return res.send("{ mensagem: Novo responsável criado! }");
},

atualizarResponsavel : async (req, res) => {
  const id = req.params.id;
  const nome = req.body.Nome;
  const codEmpresa = parseInt(req.body.CodEmpresa);

  // Validação dos dados
  if (!nome) {
    if (codEmpresa === null || !Number.isInteger(codEmpresa)){
      return res.json({ mensagem: 'Dados inválidos' });
    }
  }

  const result = await responsavelService.atualizarResp(id, nome, codEmpresa);

  if (result.affectedRows === 0) {
    return res.json({ mensagem: 'Responsável não encontrado' });
  }

  res.json({ mensagem: 'Responsável atualizado com sucesso' });
},
  
  excluirResponsavel : async (req, res) => {
    const id = req.params.id;
    const result = await responsavelService.deletarResp(id);
  
    if (result.affectedRows === 0) {
      return res.json({ mensagem: 'Responsável não encontrado' });
    }
  
    res.json({mensagem: 'Responsável deletado'});
  }
};