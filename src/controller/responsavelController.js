const connection = require('../bd.js');

module.exports = {
  criarResponsavel: async (req, res) => {
  const { nome, codigoEmpresa } = req.body;

  // Validação dos dados
  if (!nome || !codigoEmpresa) {
    return res.json({ mensagem: 'Dados inválidos' });
  }

  // Inserindo o responsável no banco de dados
  const result = await connection.query('INSERT INTO responsaveis VALUES (?, ?)', [nome, codigoEmpresa]);
  res.json({ mensagem: "Novo responsável criado!", id: result.insertId });
}
}



module.exports = {
  buscarTodosResponsaveis: async (req, res) => {
  const responsaveis = await connection.query('SELECT * FROM responsaveis').then(res=>console.log(res)).catch(console.log('Teste'));
  res.json(responsaveis); 
}
}

module.exports = {
  buscarResponsavelPorId: async (req, res) => {
  const id = req.params.id;
  const responsavel = await connection.query('SELECT * FROM responsaveis WHERE id = ?', [id]);

  if (responsavel.length === 0) {
    return res.json({ mensagem: 'Responsável não encontrado' });
  }

  res.json(responsavel[0]);
}
}

module.exports = {
atualizarResponsavel: async (req, res) => {
  const id = req.params.id;
  const { nome, codigoEmpresa } = req.body;

  // Validação dos dados
  if (!nome || !codigoEmpresa) {
    return res.json({ mensagem: 'Dados inválidos' });
  }

  const result = await connection.query('UPDATE responsaveis SET nome = ?, codigo_empresa = ? WHERE id = ?', [nome, codigoEmpresa, id]);

  if (result.affectedRows === 0) {
    return res.json({ mensagem: 'Responsável não encontrado' });
  }

  res.json({ mensagem: 'Responsável atualizado com sucesso' });
}
}

module.exports = {
  excluirResponsavel: async (req, res) => {
  const id = req.params.id;
  const result = await connection.query('DELETE FROM responsaveis WHERE id = ?', [id]);

  if (result.affectedRows === 0) {
    return res.json({ mensagem: 'Responsável não encontrado' });
  }

  res.json({mensagem: 'Responsável deletado'});
}
}