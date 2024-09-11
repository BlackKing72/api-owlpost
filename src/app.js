const expressFileUpload = require('express-fileupload');
const express = require('express');
const cors = require('cors');

const fs = require('fs');
const path = require('path');

const owlpostRouter = require('./routes/owlpostRouter');

const app = express();
const port = 3000;

app.use(cors({
    origin: '*',
    methods: ['POST', 'PUT', 'PATCH', 'DELETE', 'GET'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(expressFileUpload());
app.use('/', owlpostRouter);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}


app.get('/', (req, res) => {
    res.send('UwU');
});

// owo@email.com 123

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})