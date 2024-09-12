const dbConnection = require('../models/dbConnection');
const httpStatus = require('../models/httpStatus');

const express = require('express');
const router = express.Router();

/* 
Retorna todos os usuários presentes no banco de dados. 
*/
router.get("/", (req, res) => {
    const query = `select * from Usuarios`;
    dbConnection.query(query, (err, results) => {
        if (err) {
            console.error(`Erro ao buscar usuários no banco de dados. ${err}`);
            return res
                .status(httpStatus.InternalServerError)
                .json({ message: 'Erro ao buscar usuários no banco de dados.' });
        }

        res.json(results);
    });
});

/* 
Retorna um único usuário com o id correspondente ou null se ele não existir 
no banco de dados. 
*/
router.get("/:id", (req, res) => {
    const { id } = req.params;

    if (id <= 0 || isNaN(id)) {
        return res
            .status(httpStatus.BadRequestStatus)
            .json({ message: 'ID de usuário invalido.' });
    }

    const query = `select * from Usuarios where id = ?`;
    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Erro ao buscar usuário no banco de dados. ${err}`);
            return res
                .status(httpStatus.InternalServerError)
                .json({ message: 'Erro ao buscar usuário no banco de dados.' });
        }

        if (results.length === 0) {
            return res
                .status(httpStatus.NotFound)
                .json({ message: 'Usuário não encontrado' });
        }

        res.json({
            user: results[0]
        });
    });
});

/* 
Cria um novo usuário. Usa o form-data para enviar a imagem para 
o banco de dados como binário.
*/
router.put('/', (req, res) => {
    const { nome, email, senha } = req.body;

    // todo: validar email e senha

    // a foto de perfil não vem no body pelo body pq está usando o form-data.
    const fotoPerfil = req.files.fotoPerfil;    // o buffer contendo a imagem.
    const fotoFormato = fotoPerfil.mimetype;    // mimetype é o formato da imagem. ex: imagem/png.
    const fotoPerfilBuffer = fotoPerfil.data;   // o binário que vai ser salvo no banco.

    const query = `insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values (?, ?, md5(?), ?, ?);`
    dbConnection.query(query, [nome, email, senha, fotoPerfilBuffer, fotoFormato], (err, results) => {
        if (err) {
            console.error(`Erro ao criar usuário no banco de dados. ${err}`);
            return res
                .status(httpStatus.InternalServerError)
                .json({ message: 'Erro ao criar usuário no banco de dados.' });
        }

        res.json(results);
    });
});

/* 
Atualiza a foto de perfil do usuário. Usa o form-data para enviar a imagem para 
o banco de dados como binário.
*/
router.patch('/', (req, res) => {
    const { id } = req.body;

    if (id <= 0 || isNaN(id)) {
        return res
            .status(httpStatus.BadRequestStatus)
            .json({ message: 'ID de usuário invalido.' });
    }

    // a foto de perfil não vem no body pelo body pq está usando o form-data.
    const fotoPerfil = req.files.fotoPerfil;    // o buffer contendo a imagem.
    const fotoFormato = fotoPerfil.mimetype;    // mimetype é o formato da imagem. ex: imagem/png.
    const fotoPerfilBuffer = fotoPerfil.data;   // o binário que vai ser salvo no banco.
    
    const query = `update Usuarios set fotoFormato = ?, fotoPerfil = ? where id = ?;`
    dbConnection.query(query, [fotoPerfilBuffer, fotoFormato, id], (err, results) => {
        if (err) {
            console.error(`Erro ao tentar atualizar a foto de perfil. ${err}`);
            return res
                .status(httpStatus.InternalServerError)
                .json({ message: 'Erro ao tentar atualizar a foto de perfil.' });
        }

        res.json(results);
    });
});

module.exports = router;