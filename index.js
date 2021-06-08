const express = require('express');

const PORT = 3003;
const HOST = '0.0.0.0';

const app = express();

app.get('/info', (req, res) => {
    res.json({
        "componente": "resourcemanager",
        "descrição": "serve os clientes com os serviços x, y e z",
        "versao": "0.1"
    });
})

app.listen(PORT, HOST);