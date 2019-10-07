mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Equipo = require('./equipo');
const Deporte = require('./deporte');
const Partido = require('./partido');

const ligaSchema = new Schema({
 deporte: { type: mongoose.Schema.ObjectId, ref: "Deporte", require: false },
 nombreLiga: { type: String },
 descripcion: { type: String },
 organizador: 
    {
      nombre: { type: String },
      apellido: { type: String },
      cedula: { type: String },
      fechaDeNac: { type: Number },
      telefono: { type: String },
      direccion: { type: String }
    },

  fechaCreada: { type: Date },
  // equipo: [{ type: mongoose.Schema.ObjectId, ref: "Equipo", require: false}], //referencias
  // partido:[{type: mongoose.Schema.ObjectId, ref: "Partido", require: false}], //referencias
});
    
    const Liga = mongoose.model('Liga', ligaSchema)
    
    module.exports = Liga;
