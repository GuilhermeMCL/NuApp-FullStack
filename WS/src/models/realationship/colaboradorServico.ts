import { number } from "zod";


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
    colaboradorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        required: [true, 'ID do colaborador é obrigatório'],
    },
    servicoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico',
        required: [true, 'ID do serviço é obrigatório'],

    },
    status: {
        type: String,
        enum: ['ativo', 'inativo', 'excluido'],
        default: 'ativo',
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('ColaboradorServico', colaboradorServico);