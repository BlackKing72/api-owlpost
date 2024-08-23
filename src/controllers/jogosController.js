const dbConnection = require('../models/dbConnection');
const express = require('express');
const router = express.Router();


router.get('/id/:id', (req,res) => {
    const id = req.params.id
    const query ='Select * from Jogos where id = ?';
    dbConnection.query(query,[id],(err, results) => {
        if(err) throw err;
        res.json(results);
    })
});

module.exports = router;