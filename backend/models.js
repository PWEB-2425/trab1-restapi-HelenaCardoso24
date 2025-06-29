const mongoose = require('mongoose');

// Define a estrutura (schema) dos dados de um utilizador
const chamarAlunos = new mongoose.Schema({
    nome: String,
    apelido: String,
    curso: String,
    idade:String,
    AnoCurricular: String
});

// Exporta o modelo para poder ser usado nas rotas
module.exports = mongoose.model('Alunos', chamarAlunos);
