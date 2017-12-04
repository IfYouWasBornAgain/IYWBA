const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const database = mongoose.connection;
database.on('error', console.error);
database.once('open', function(){
    console.log('Connected mongoDB');
});
mongoose.connect('mongodb://localhost:27017/survey');

const schema = new mongoose.Schema({
    q1: {type:String, required:true},
    q2: {type:String, required:true},
    q3: {type:String, required:true},
    q4: {type:String, required:true},
    q5: {type:String, required:true},
    q6: {type:String, required:true},
    q7: {type:String, required:true}
});

module.exports = mongoose.model('IYWBA', schema);