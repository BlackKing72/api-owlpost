const express = require('express');
const owlpostRouter = require('./routes/owlpostRouter');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', owlpostRouter);

app.get('/', (req, res) => {
    res.send('UwU');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})