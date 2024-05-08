const responsavelService = require('../service/responsavelService.js')

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
    const { nome, codigoEmpresa } = req.body;

    // Validação dos dados
    if (!nome || !codigoEmpresa) {
      return res.json({ mensagem: 'Dados inválidos' });
    }

    // Inserindo o responsável no banco de dados
    const result = await responsavelService.criarResp(nome, codigoEmpresa);
    return res.send("{ mensagem: Novo responsável criado! }");
},

  atualizarResponsavel : async (req, res) => {
    const id = req.params.id;
    const { Nome, codEmpresa } = req.body;
  
    // Validação dos dados
    if (!Nome || !codEmpresa) {

      //return res.json({ mensagem: 'Dados inválidos' });
      return res.json(Nome, codEmpresa);
    }
  
    const result = await responsavelService.atualizarResp(id, Nome, codEmpresa);
  
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