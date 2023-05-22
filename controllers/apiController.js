/* 
* @Title: apiController for handling CURD API requests
* @Description: API Controller
* Date: 2020-09-13 10:32:38
*/

// dependencies
const db = require('../firebase');
var _ = require('lodash');
const { respondWithSuccess, respondWithError } = require('../libs/jsonResponse');
const bcrypt = require('bcrypt');
const generatePushId = require('../libs/generatePushId');


const dbRef = db.collection('curd').doc('users');


// app scaffolding
const apiController = {};


// get all data
apiController.getAllData = async (req, res) => {

    const doc = await dbRef.get();
    if (_.isEmpty(doc._fieldsProto)) {
        respondWithSuccess(res, 'No data found');
        return;
    }
    var data = doc.data().data;
    // remove password
    data.forEach((item, index) => {
        delete data[index].password;
    });
    respondWithSuccess(res, 'Data fetched successfully', data);
};


// get single data

// create data
apiController.createData = async (req, res) => {

    const { name, email, phone, address, password } = req.body;

    var hasPass = "";
    bcrypt.hash(password, 10, function (err, hash) {
        hasPass = hash;
    });

    var getDoc = await dbRef.get();
    var _id = "";
    checkDuplicatedID: while (true) {
        _id = generatePushId(24);
        getDoc = await dbRef.get();
        if (!_.isEmpty(getDoc._fieldsProto)) {
            const data = getDoc.data().data;
            const isExist = data.filter(item => item._id === _id);
            if (isExist.length > 0) {
                continue checkDuplicatedID;
            }else{
                break;
            }
        }else{
            break;
        }
    }



    var data = [{
        _id: _id,
        name,
        email,
        phone,
        address,
        password: hasPass
    }];

    if (!_.isEmpty(getDoc._fieldsProto)) {
        data = [
            ...getDoc.data().data,
            ...data,
        ];
    }

    const resData = await dbRef.set({ data });
    if (resData) {
        // last data fetch
        const doc = await dbRef.get();
        data = doc.data().data;
        const newData = data[data.length - 1];
        respondWithSuccess(res, 'Data created successfully done', newData);
    } else {
        respondWithError(res, 'Data created failed');
    }
};


// update data
apiController.updateData = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address, password } = req.body;

    var hasPass = "";
    bcrypt.hash(password, 10, function (err, hash) {
        hasPass = hash;
    });

    // get data where id = id

    const doc = await dbRef.get();
    if (_.isEmpty(doc._fieldsProto)) {
        respondWithError(res, 'No data found');
        return;
    }
    var data = doc.data().data;
    const index = data.findIndex(item => item._id === id);
    if (index === -1) {
        respondWithError(res, 'No data found');
        return;
    }
    // update data
    data[index].name = name;
    data[index].email = email;
    data[index].phone = phone;
    data[index].address = address;
    data[index].password = hasPass;
    const resData = await dbRef.set({ data });
    if (resData) {
        // last data fetch
        const doc = await dbRef.get();
        data = doc.data().data;
        const newData = data.findIndex(item => item._id === id);
        respondWithSuccess(res, 'Data updated successfully', data[newData]);
    } else {
        respondWithError(res, 'Data updated failed');
    }
};


// delete data


// export
module.exports = apiController;
