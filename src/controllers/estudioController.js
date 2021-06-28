const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

const criarEstudio = async (req, res) => {
    const estudio = new Estudio ({
        _id: new mongoose.Schema.Types.ObjectId(),
        nome: req.body.nome,
        criadoEm: req.body.criadoEm
    })

    const estudioExiste = await Estudio.findOne({nome: req.body.nome})

    if (estudioExiste) {
        return res.status(409).json({error: "Estudio já cadastrado!"})
    }

    try {
        const novoEstudio = await estudio.save()
        res.status(201).json(novoEstudio)
    } catch(erro) {
        res.status(500).json({message: err.message})
    }
}


const mostraEstudios = async (req, res) => {
    try {
        const estudios = await Estudio.find()
        return res.status(200).json(estudios)
    } catch (erro) {
        return res.status(500).json({message: erro.message})
    }
}

const atualizaEstudio = async (req, res) => {
    const encontraEstudio = await Estudio.findById(req.params.id)

    if (encontraEstudio == null) {
        return res.status(404).json({message: 'estudio não encontrado.'})
    }

    try {
        const estudioAtualizado = await encontraEstudio.save()
        res.status(200).json(estudioAtualizado)
    } catch (erro) {
        res.status(500).json({message: erro.message})
    }
}

const deletaEstudio = async (req, res) => {
    const encontraEstudio = await Estudio.findBy(req.params.id)
    
    if (encontraEstudio == null) {
        return res.status(404).json({message: 'estudio não encontrado'})
    }

    try {
        await encontraEstudio.remove()
        res.status(200).json({message: 'foi deletado com sucesso'})
    } catch (erro) {
        res.status(500).json({message: erro.message})
    }
}

module.exports = {
    criarEstudio,
    mostraEstudios,
    atualizaEstudio,
    deletaEstudio
}