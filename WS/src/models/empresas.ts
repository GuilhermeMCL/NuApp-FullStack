

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresa = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    senha: String,
    telefone: String,
    endereco: {
        cidade: String,
        uf: String,
        bairro: String,
        rua: String,
        numero: String,
        cep: String,
        pais: String
    },
    geo: {
        type: String,
        coordinates: Array

    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }

});






empresa.index({ geo: '2dsphere' });



export const Empresa = mongoose.model('Empresa', empresa);