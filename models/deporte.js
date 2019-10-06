mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const Liga = require('./liga');


const deporteSchema = new Schema({
nombre: {type:String},
//liga:[{type: mongoose.Schema.ObjectId, ref: "Liga", require: false}] //referencia
});

const Deporte = mongoose.model('Deporte', deporteSchema)

module.exports = Deporte;
