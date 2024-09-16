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
            return res.status(httpStatus.InternalError).json({ 
                mensagem: `Erro ao buscar usuários. erro: ${err}`
            });
        }

        if (results.length === 0) {
            return res.status(httpStatus.NotFound).json({ 
                mensagem: 'Usuários não encontrados.' 
            });
        }

        res.json({
            users: results
        });
    });
});

/* 
Retorna um único usuário com o id correspondente ou null se ele não existir 
no banco de dados. 
*/
router.get("/:id", (req, res) => {
    const { id } = req.params;

    const query = `select * from Usuarios where id = ?`;
    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({ 
                mensagem: `Erro ao buscar usuário. erro: ${err}` 
            });
        }

        if (results.length === 0) {
            return res.status(httpStatus.NotFound).json({ 
                mensagem: 'Usuário não encontrado.' 
            });
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

    // a foto de perfil não vem pelo body pq está usando o form-data.
    const fotoPerfil = req.files.fotoPerfil;    // o buffer contendo a imagem.
    const fotoFormato = fotoPerfil.mimetype;    // o formato da imagem. ex: imagem/png.
    const fotoPerfilBuffer = fotoPerfil.data;   // o binário que vai ser salvo no banco.

    const query = `
        insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) 
        values (?, ?, md5(?), ?, ?)`;

    dbConnection.query(query, [nome, email, senha, fotoPerfilBuffer, fotoFormato], (err, results) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({ 
                mensagem: `Erro ao criar usuário. erro: ${err}` 
            });
        }

        res.json({
            mensagem: `Usuário criado com sucesso.`,
        });
    });
});

/* 
Atualiza a foto de perfil do usuário. Usa o form-data para enviar a imagem para 
o banco de dados como binário.
*/
router.patch('/', (req, res) => {
    const { id } = req.body;

    // a foto de perfil não vem pelo body pq está usando o form-data.
    const fotoPerfil = req.files.fotoPerfil;    // o buffer contendo a imagem.
    const fotoFormato = fotoPerfil.mimetype;    // mimetype é o formato da imagem. ex: imagem/png.
    const fotoPerfilBuffer = fotoPerfil.data;   // o binário que vai ser salvo no banco.
    
    const query = `update Usuarios set fotoFormato = ?, fotoPerfil = ? where id = ?`;
    dbConnection.query(query, [fotoPerfilBuffer, fotoFormato, id], (err, results) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({ 
                mensagem: `Erro ao tentar atualizar a foto de perfil. erro: ${err}` 
            });
        }

        res.json({
            mensagem: `Foto de perfil atualizada com sucesso.`
        });
    });
});

module.exports = router;