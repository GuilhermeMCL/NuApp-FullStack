import { number } from "zod";


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresasColaborador = new Schema({
    empresaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: [true, 'ID da empresa é obrigatório'],
    },
    colaboradorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        required: [true, 'ID do colaborador é obrigatório'],
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

module.exports = mongoose.model('EmpresasColaborador', empresasColaborador);