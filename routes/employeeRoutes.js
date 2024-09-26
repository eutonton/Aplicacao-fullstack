const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Rota para listar todos os funcionários
router.get('/employees', employeeController.getAllEmployees);

// Rota para adicionar novo funcionário
router.post('/employees', employeeController.createEmployee);

module.exports = router;
