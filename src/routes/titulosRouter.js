const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')

router.post('/', controller.criaTitulo)

router.get('/', controller.mostraTitulos)

router.get('/marvel', controller.mostraTitulosMarvel)
router.get('/ghibli', controller.mostraTitulosGhibli)
router.get('/pixar', controller.mostraTitulosPixar)

router.patch('/:id', controller.atualizaTitulo)

router.delete('/:id', controller.deletaTitulo)

module.exports = router