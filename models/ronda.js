mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const Liga = require('./liga');
const Partido = require('./partido');
const Equipo = require('./equipo');


const rondaSchema = new Schema({
liga: [{type: mongoose.Schema.ObjectId, ref: "Liga", require: false}],
nombre: {type:String}, //grupos/ octavos de final/cuartos de final/semifinal/Tercer Lugar/final
ganador: [{type:Number}],
finalistas:{type:Number},
equipos: [{type: mongoose.Schema.ObjectId, ref: "Equipo", require: false}], //referencias
partido: [{type: mongoose.Schema.ObjectId, ref: "Partido", require: false}], //referencias
});

const Ronda = mongoose.model('Ronda', rondaSchema)
module.exports = Ronda;
