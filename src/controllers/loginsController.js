const dbConnection = require('../models/dbConnection');
const httpStatus = require('../models/httpStatus');

const express = require('express');
const router = express.Router();

/*
Cria um novo login ou atualiza o status do login antigo.
*/
router.post('/', (req, res) => {
    const { email, senha } = req.body;

    const querySelect = "select * from Usuarios where email = ? and senha = md5(?)";
    dbConnection.query(querySelect, [email, senha], (err, usuarios) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({ 
                mensagem: `Erro ao buscar um usuário. erro: ${err}` 
            });
        }

        if (usuarios.length === 0) {
            return res.status(httpStatus.NotFound).json({ 
                mensagem: 'Login do usuário não encontrado.' 
            });
        }

        const userID = usuarios[0].id;

        // replace - se já existir um campo com uma PRIMARY KEY ou UNIQUE KEY ele
        // substitui, senão ele cria um novo. Neste caso idUsuario é uma UNIQUE KEY
        // então o replace funciona.
        const queryInsert = "replace into Logins (idUsuario, logado) values (?, ?)";
        dbConnection.query(queryInsert, [userID, true], (err, results) => {
            if (err) {
                return res.status(httpStatus.InternalError).json({ 
                    mensagem: `Erro ao tentar criar ou atualizar o login. erro: ${err}` 
                });
            }
    
            res.json({
                mensagem: 'Usuário logado com sucesso.',
                userID: userID
            });
        });
    });
});

/*
Atualiza o status de um login.
*/
router.patch('/', (req, res) => {
    const { idUsuario, logado } = req.body;
    
    const query = `update Logins set logado = ?, ultimaAtividade = current_timestamp where idUsuario = ?`;
    dbConnection.query(query, [logado, idUsuario], (err, results) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({ 
                mensagem: `Erro ao tentar atualizar o status de um login. erro: ${err}` 
            });
        }

        res.json({
            mensagem: `Status do login atualizado com sucesso.`
        });
    });
});

module.exports = router;