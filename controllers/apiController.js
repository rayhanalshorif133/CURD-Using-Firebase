/* 
* @Title: apiController for handling CURD API requests
* @Description: API Controller
* Date: 2020-09-13 10:32:38
*/ 

// dependencies
const db = require('../firebase');
var _ = require('lodash');
const { respondWithSuccess, respondWithError } = require('../libs/jsonResponse');

const dbRef = db.collection('curd').doc('users');


// app scaffolding
const apiController = {};


// get all data
apiController.getAllData = async (req, res) => {
    const doc = await dbRef.get();
    if(_.isEmpty(doc._fieldsProto)) {
        respondWithSuccess(res, 'No data found');
        return;
    }
    const data = doc.data().data;
    respondWithSuccess(res, 'Data fetched successfully', data);
};


// get single data


// create data
apiController.createData = async (req, res) => {
    
        const { name, email, phone,address,password } = req.body;

        const getDoc = await dbRef.get();
        var data = [];
        if(!_.isEmpty(getDoc._fieldsProto)) {
            data = [
                ...getDoc.data().data,
                {
                    name,
                    email,
                    phone,
                    address
                }
            ];
        }else{
            data = [
                {
                    name,
                    email,
                    phone,
                    address
                }
            ];
        }
        
        const resData = await dbRef.set({data});
        if(resData){
            // last data fetch
            const doc = await dbRef.get();
            data = doc.data().data;
            const newData = data[data.length - 1];
            respondWithSuccess(res, 'Data created successfully done', newData);
        }else{
            respondWithError(res, 'Data created failed');
        }
};


// update data


// delete data


// export
module.exports = apiController;
