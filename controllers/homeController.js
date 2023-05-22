// dependencies


// configuration
const PORT = process.env.PORT || 3001;


// app scaffolding
const homeController = {};


homeController.index = (req, res) => {
    res.render('index', { title: 'Home' , port: PORT});
};





// export
module.exports = homeController;