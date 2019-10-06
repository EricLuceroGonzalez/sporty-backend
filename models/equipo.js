mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Liga = require('./liga');
const Partido = require('./partido');

const equipoSchema = new Schema({
  liga: [{type: mongoose.Schema.ObjectId,ref: "Liga", require: false}],
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
          aFavor:{type:Number},
          enContra:{type:Number}
      },
      targetas:{
          amarilla:{type:Number},
          roja:{type:Number},
      }
    }
  ],
  puntos:{type:Number},
  golesAfovor:{type:Number},
  golesEnContra:{type:Number},
  maximoGoleador:{type:Number},
  capitan:{type:String},
  partido: [{type: mongoose.Schema.ObjectId, ref: "Partido", require: false}], //referencia

});

const Equipo = mongoose.model('Equipo', equipoSchema)

module.exports = Equipo;