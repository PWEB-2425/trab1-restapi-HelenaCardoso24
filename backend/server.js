// API real a ser implementada
//onde se da fetch


// Importa os módulos necessários
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

// Importa as rotas que vamos criar
const AlunoRoutes = require('./routes');

// Cria a aplicação Express
const app = express();
app.use(cors())
// Permite que o servidor processe JSON
app.use(express.json());

// Usa as rotas criadas para qualquer pedido que comece com /users
app.use('/alunos', AlunoRoutes);// as rotas vao ser usadas em /alunos

// Conecta ao banco MongoDB usando a URL definida no .env
mongoose.connect("mongodb+srv://helena:1234aA@ze.zukd2sa.mongodb.net/?retryWrites=true&w=majority&appName=Ze", { dbName:'academicos' })
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Define a porta (pode vir do .env ou padrão 3000)
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:3000`));
