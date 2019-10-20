mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Liga = require("./liga");
const Partido = require("./partido");
const Player = require("./playerSchema");

const equipoSchema = new Schema({
  ligaId: { type: mongoose.Schema.ObjectId, ref: "Liga", require: false },
  nombre: { type: String },
  director: {
    nombre: { type: String },
    apellido: { type: String },
    cedula: { type: String },
    edad: { type: Number },
    telefono: { type: Number },
    direccion: { type: String }
  },
  jugador: [{ type: mongoose.Schema.ObjectId, ref: "Player", require: false }],
  estadisticas: {
    puntos: { default: 0, type: Number },
    ganados: { default: 0, type: Number },
    empatados: { default: 0, type: Number },
    perdidos: { default: 0, type: Number },
    golesAfovor: { default: 0, type: Number },
    golesEnContra: { default: 0, type: Number },
    maximoGoleador: { default: 0, type: Number },
    totaTarjetas: {
      amarilla: { default: 0, type: Number },
      roja: { default: 0, type: Number }
    }
  },
  capitan: { type: String },
  partido: [{ type: mongoose.Schema.ObjectId, ref: "Partido", require: false }] //referencia
});

const Equipo = mongoose.model("Equipo", equipoSchema);

module.exports = Equipo;
