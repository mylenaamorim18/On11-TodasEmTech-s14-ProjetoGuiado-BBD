const express = require('express')
const app = express()

app.use(express.json())

const db = require('./src/data/database')
db.connect()

const titulo = require('./src/routes/titulosRouter')
const estudio = require('./src/routes/estudiosRouter')

app.use('/titulos', titulo)
app.use('/estudios', estudio)

app.listen(3333, ()=> console.log('Servidor rodando'))