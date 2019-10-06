mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const Partido = require('./partido');
const Equipo = require('./equipo');
const Liga = require('./liga');


const grupoSchema = new Schema({
liga: [{type: mongoose.Schema.ObjectId, ref: "Liga", require: false}],
nombre: {type:String},
ganador: [{type:Number}],
finalistas:{type:Number},
equipos: [{type: mongoose.Schema.ObjectId, ref: "Equipo", require: false}], //referencias
partido: [{type: mongoose.Schema.ObjectId, ref: "Partido", require: false}], //referencias
});

const Grupo = mongoose.model('Grupo', grupoSchema)

module.exports = Grupo;