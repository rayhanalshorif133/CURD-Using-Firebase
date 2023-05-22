/* 
* Title: json response formatting module
* Description: json response formatting module
* author: Rayhan Al Shorif
* Date: 2021-03-10 00:00:10
*/ 

// dependencies


// app scaffolding

// success response
const respondWithSuccess = (res, message, data = [], code = 200) => {
    res.json({
        message,
        data,
        status: true,
        code,
    });
};


// error response
const respondWithError = (res, message, data= "error", code = 500) => {
    res.json({
        message,
        data,
        status: false,
        code,
    });
}


// export module
module.exports = {
    respondWithSuccess,
    respondWithError
}