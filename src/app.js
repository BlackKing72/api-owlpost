const expressFileUpload = require('express-fileupload');
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');

const owlpostRouter = require('./routes/owlpostRouter');

const app = express();
const port = 3000;

app.use(cors({
    origin: '*',
    methods: ['POST', 'PUT', 'PATCH', 'DELETE', 'GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use(express.json({
    limits: '40mb'
}));

app.use(expressFileUpload({
    limits: {
        fileSize: 40 * 1024 * 1024 // Limite de 40MB
    }
}));

app.use('/', owlpostRouter);

app.get('/', (req, res) => res.send("Express on Vercel"));

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);