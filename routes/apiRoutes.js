// Initialize
const express = require('express');
const router = express.Router();



// Dependencies
const apiController = require('../controllers/apiController');
const { getAllData,createData,updateData } = apiController;

// Routes
router.get('/fetch-all', getAllData);
router.post('/create', createData);
router.put('/update/:id', updateData);


// Export
module.exports = router;