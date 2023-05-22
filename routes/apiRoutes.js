// Initialize
const express = require('express');
const router = express.Router();



// Dependencies
const apiController = require('../controllers/apiController');
const { getAllData,createData } = apiController;

// Routes
router.get('/fetch-all', getAllData);
router.post('/create', createData);


// Export
module.exports = router;