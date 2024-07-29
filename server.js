const express = require('express');
app = express()


app.get('/clientes', (req, res) => {
    res.send("Joao, José, Thiago")
})

app.get('/produtos', (req, res) => {
    res.send("Caneta, Caderno, Lápis")
})

app.listen(8080);