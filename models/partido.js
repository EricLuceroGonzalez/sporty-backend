mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const Ronda = require('./ronda');
const Equipo = require('./equipo')


const partidoSchema = new Schema({
liga: [{type: mongoose.Schema.ObjectId, ref: "Liga", require: false}],
rondaDeGrupo: { type: mongoose.Schema.ObjectId, ref: "Ronda", require: false},
numero: {type:Number},
tipo:{type:String}, //ronda de grupos/clasificado/ganadores/perdedores
equipoLocal: { type: mongoose.Schema.ObjectId, ref: "Equipo", require: false},
equipoVisitante: { type: mongoose.Schema.ObjectId, ref: "Equipo", require: false},
goleadoresLocal:[{ type: mongoose.Schema.ObjectId, ref: "Equipo", require: false}],
goleadoresVisitante:[{ type: mongoose.Schema.ObjectId, ref: "Equipo", require: false}],
golesLocal:{type:Number},
golesVisitante:{type:Number},
panalesLocales:{type:Number}, //cantitad
panalesVisitante:{type:Number},
ganador:{type:Number},
fecha:{type:Date},
lugar:{type:String},
finalizado:{type:Boolean}, //true or false
diaDeLiga:{type:Number} //1,2,3 
});

const Partido = mongoose.model('Partido', partidoSchema)

module.exports = Partido;
