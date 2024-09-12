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
            return res
                .status(httpStatus.InternalServerError)
                .json({ message: 'Erro ao tentar buscar um usuário.', error: err });
        }

        if (usuarios.length === 0) {
            return res
                .status(httpStatus.NotFound)
                .json({ message: 'Login do usuário não encontrado' });
        }

        // replace - se já existir um campo com uma PRIMARY KEY ou UNIQUE KEY ele
        // substitui, senão ele cria um novo. Neste caso idUsuario é uma UNIQUE KEY
        // então o replace funciona.
        const queryInsert = "replace into Logins (idUsuario, logado) values (?, ?)";
        dbConnection.query(queryInsert, [usuarios[0].id, true], (err, results) => {
            if (err) {
                return res
                    .status(httpStatus.InternalServerError)
                    .json({ message: 'Erro ao tentar criar ou atualizar o login', error: err });
            }
    
            res.json({
                userID: usuarios[0].id
            });
        });
    });
});

/*
Atualiza o status de um login.
*/
router.patch('/', (req, res) => {
    const { id, logado } = req.body;
    
    const querySelect = `select * from Logins where idUsuario = ?`;
    dbConnection.query(querySelect, [id], (err, results) => {
        if (err) {
            return res
                .status(httpStatus.InternalServerError)
                .json({ message: 'Erro ao tentar buscar um login', error: err});
        }

        if (results.length === 0) {
            return res
            .status(httpStatus.NotFound)
            .json({ message: 'Login não encontrado' });
        }
        
        const queryUpdate = `update Logins set logado = ?, ultimaAtividade = current_timestamp where idUsuario = ?`;
        dbConnection.query(queryUpdate, [logado, id], (err, results) => {
            if (err) {
                return res
                .status(httpStatus.InternalServerError)
                .json({ message: 'Erro ao tentar atualizar o status de um login', error: err});
            }

            res.json(results);
        });
    });
});

module.exports = router;