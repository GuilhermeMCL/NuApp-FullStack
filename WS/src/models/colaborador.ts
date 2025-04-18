

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
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
    contaBancaria: {
        titular: {
            type: String,
            required: true
        },
        cpfCnpj: {
            type: String,
            required: true
        },
        banco: {
            type: String,
            required: true
        },
        agencia: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        dv: {
            type: String,
            required: true
        }
    },
    recipientId: {
        type: String,
        required: true
    },

    dataCadastro: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Colaborador', colaborador);