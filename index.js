const express = require('express');
const cors = require('cors'); 
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = 3000;


app.use(cors()); 
app.use(express.json()); 


app.use('/api', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
