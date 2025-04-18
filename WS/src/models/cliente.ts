

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },

    telefone: {
        type: String,
        required: [true, 'Telefone é obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    senha: {
        type: String,
        required: [true, 'Senha é obrigatória'],
    },
    foto: {
        type: String,
        required: [true, 'Foto é obrigatória'],
    },
    dataNascimento: {
        type: String,
        required: [true, 'Data de Nascimento é obrigatória'],
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'feminino'],
        required: [true, 'Sexo é obrigatório'],
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        default: 'ativo',
        required: [true, 'Telefone é obrigatório'],
    },
    documento: {
        tipo: {
            type: String,
            enum: ['individual', 'corporation'],
            required: [true, 'Tipo do documento é obrigatório'],
        },
        numero: {
            type: String,
            required: [true, 'Número do documento é obrigatório'],
        },
    },
    endereco: {
        cidade: String,
        uf: String,
        bairro: String,
        rua: String,
        numero: String,
        cep: String,
        pais: String,
    },


    dataCadastro: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Cliente', cliente);