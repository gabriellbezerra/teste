const db = require("../bd.js");

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM responsavel', (error, results) => {
                if (error) {
                    rejeitado(error); 
                    return;
                }
                aceito(results);
            });
        });
    },


    buscarPorIp: (id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM responsavel WHERE CodResp = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error); 
                    return;
                }
                aceito(results);
            });
        });
    },

    criarResp: (nome, codigoEmpresa) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO responsavel VALUES (?, ?)', [nome, codigoEmpresa], (error, results) => {
                if (error) {
                    rejeitado(error); 
                    return;
                }
                aceito(results);
            });
        });
    },

    atualizarResp: (id, nome, codigoEmpresa) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE responsavel SET nome = ?, CodEmpresa = ? WHERE CodResp = ?', [nome, codigoEmpresa, id], (error, results) => {
                if (error) {
                    rejeitado(error); 
                    return;
                }
                aceito(results);
            });
        });
    },

    deletarResp: (id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM responsavel WHERE codResp = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error); 
                    return;
                }
                aceito(results);
            });
        });
    },
}; 