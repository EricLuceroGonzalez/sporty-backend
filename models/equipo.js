mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Liga = require("./liga");
const Partido = require("./partido");

const equipoSchema = new Schema({
  liga: [{ type: mongoose.Schema.ObjectId, ref: "Liga", require: false }],
  nombre: { type: String },
  director: {
    nombre: { type: String },
    apellido: { type: String },
    cedula: { type: String },
    edad: { type: String },
    telefono: { type: String },
    direccion: { type: String }
  },
  jugador: [
    {
      nombre: { type: String },
      apellido: { type: String },
      cedula: { type: String },
      edad: { type: String },
      telefono: { type: String },
      direccion: { type: String },
      posicion: { type: String },
      numero: { type: Number },
      goles: {
        aFavor: { default: 0, type: Number },
        enContra: { default: 0, type: Number }
      },
      tarjetas: {
        amarilla: { default: 0, type: Number },
        roja: { default: 0, type: Number }
      }
    }
  ],
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
