/*
* Title: database collections
* Description: database collections for firebase
* Author: Rayhan Al Shorif
* Date: 2021-09-13 10:32:38
*/ 


// dependencies
const db = require('../database/firebase');


// make collection
const curd = db.collection('curd');



// export
module.exports = {
    curd
};