// Initialize
const express = require('express');
const router = express.Router();



// Dependencies
const apiController = require('../controllers/apiController');
const { getAllData,createData,updateData, deleteData } = apiController;

// Routes
router.get('/fetch-all', getAllData);
router.post('/create', createData);
router.put('/update/:id', updateData);
router.delete('/delete/:id', deleteData);
// Export
module.exports = router;