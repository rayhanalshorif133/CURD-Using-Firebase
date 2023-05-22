const { initializeApp,cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");


// Initialize Firebase
var serviceAccount = require("./serviceAccountKey.json");

const app = initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore(app);

module.exports = db;