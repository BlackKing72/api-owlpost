const dbConnection = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

const path = require('path');

router.get("/", (req, res) => {
    const query = `Select * from Usuarios`;
    dbConnection.query(query, (err, results) => {
        if (err){
            console.error(err);
            return;
        }

        res.json(results);
    });
});

router.get("/id/:id", (req, res) => {
    const id = req.params.id;
    const query = `Select * from Usuarios where id_usuario = ?`;
    dbConnection.query(query, [id], (err, results) => {
        if (err){
            console.error(err);
            return;
        }

        res.json({
            user: results[0]
        });
    });
});

router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = "select * from Usuarios where email = ? and senha = md5(?)";
    dbConnection.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error(err);
            return;
        }

        const userID = results[0] ? results[0].id_usuario : undefined;
 
        res.json({
            results: results,
            userID: userID,
        });
    });
})

router.put('/alt', (req, res) => {
    const { nome, email, senha } = req.body;
    const profilePic = req.files.profilePic;

    console.log(profilePic);

    const uploadsDir = path.join(__dirname, '..', 'uploads');

    const extension = path.extname(profilePic.name);
    const imageName = `user_${nome}_${Date.now()}${extension}`;
    const imagePath = path.join(uploadsDir, imageName);

    console.log(imagePath);

    profilePic.mv(imagePath, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao salvar a imagem no servidor.' });
        }

        console.log('criando o usuário na tabela.');

        const query = `insert into Usuarios (nome, email, senha, foto_perfil) values (?, ?, md5(?), ?);`
        dbConnection.query(query, [nome, email, senha, imageName], (err, results) => {
            if (err){
                return res.status(500).json({ message: 'Erro ao criar usuário no banco de dados.'});
            }

            console.log(results);
    
            res.json(results);
        });
    })
})

router.put('/', (req, res) => {
    const { nome, email, senha, foto_perfil } = req.body;
    const query = `insert into Usuarios (nome, email, senha, foto_perfil) values (?, ?, md5(?), ?);`
    dbConnection.query(query, [nome, email, senha, foto_perfil], (err, results) => {
        if (err){
            console.error(err);
            return;
        }

        res.json(results);
    });
})

router.patch('/', (req, res) => {
    const { id, foto_perfil } = req.body;
    const query = `update Usuarios set foto_perfil = ? where id_usuario = ?;`
    dbConnection.query(query, [foto_perfil, id], (err, results) => {
        if (err){
            console.error(err);
            return;
        }

        res.json(results);
    });
})

module.exports = router;