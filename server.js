// Initialize
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
dotenv.config();
app.use(express.json());
app.use(cors());

// dependencies
const APIRoutes = require('./routes/apiRoutes');
const HomeController = require('./controllers/homeController');

// Static files
app.use(express.static(__dirname + '/public'));

// configuration
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3001;


// Routes
app.use('/test', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});
app.use('/api', APIRoutes);
app.get('/', HomeController.index);


// Listen on port 3000
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

