import { number } from "zod";


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
    empresaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: [true, 'ID da empresa é obrigatório'],
    },

    especialidades: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico',
        required: [true, 'ID da especialidade é obrigatório'],
    }],
    colaboradores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        required: [true, 'ID do colaborador é obrigatório'],
    }],
    dias: {
        type: [number],
        required: [true, 'Dias da semana são obrigatórios'],

    },
    inicio: {
        type: [number],
        required: [true, 'Dias da semana são obrigatórios'],

    },
    fim: {
        type: [number],
        required: [true, 'Dias da semana são obrigatórios'],

    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Horario', horario);