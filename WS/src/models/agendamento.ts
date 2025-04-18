
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
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
    servicoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico',
        required: [true, 'ID do serviço é obrigatório'],
    },
    colaboradorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        required: [true, 'ID do colaborador é obrigatório'],
    },
    data: {
        type: Date,
        required: [true, 'Data do agendamento é obrigatório'],
    },
    comissao: {
        type: Number,
        required: [true, 'Comissão é obrigatória'],
    },
    valor: {
        type: Number,
        required: [true, 'Valor é obrigatório'],
    },
    transactionId: {
        type: String,
        required: [true, 'ID da transação é obrigatório'],
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Agendamento', agendamento);