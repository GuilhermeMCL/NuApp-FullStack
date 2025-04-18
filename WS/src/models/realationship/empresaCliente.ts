
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresasCliente = new Schema({
    empresaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: [true, 'ID da empresa é obrigatório'],
    },
    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: [true, 'ID do cliente é obrigatório'],
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

module.exports = mongoose.model('EmpresasCliente', empresasCliente);