const express = require('express');
const cors = require('cors');

const owlpostRouter = require('./routes/owlpostRouter');

const app = express();
const port = 3000;

app.use(cors({
    origin: '*',
    methods: ['POST', 'PUT', 'PATCH', 'DELETE', 'GET'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use('/', owlpostRouter);

app.get('/', (req, res) => {
    res.send('UwU');
});

// owo@email.com 123

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})