const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = 3000;

// Middleware para permitir CORS
app.use(cors()); // Permite CORS para todas as origens
app.use(express.json()); // Para analisar JSON

// Use as rotas
app.use('/api', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
