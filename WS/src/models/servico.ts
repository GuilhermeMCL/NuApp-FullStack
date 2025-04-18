
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({

    empresaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: [true, 'ID da empresa é obrigatório'],
    },
    titulo: {
        type: String,
        required: [true, 'Título é obrigatório'],
    },
    preco: {
        type: Number,
        required: [true, 'Preço é obrigatório'],
    },
    comissao: {
        type: Number,// Comissão em porcentagem sobre o preço
        required: [true, 'Comissão é obrigatória'],
    },

    descricao: {
        type: String,
        required: [true, 'Descrição é obrigatória'],
    },
    duracao: {
        type: String, // Duração em minutos
        required: [true, 'Duração é obrigatória'],
    },
    recorrencia: {
        type: Number, // Recorrência em dias
        required: [true, 'Recorrência é obrigatória'],
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo', 'excluido'],
        default: 'ativo',
        required: [true, 'Status é obrigatório'],
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Colaborador', colaborador);