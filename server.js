// Initialize
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(express.json());

// dependencies
const APIRoutes = require('./routes/apiRoutes');

// Static files
app.use(express.static(__dirname + '/public'));

// configuration
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3001;


// Routes

app.use('/api', APIRoutes);

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' , port: PORT});
});


// Listen on port 3000
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

