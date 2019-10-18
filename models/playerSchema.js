// We create a Mongo db schema for this variable
// Copy from mongoose docs
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Liga = require("./liga");

const playerSchema = new Schema({
  ligaId: { type: mongoose.Schema.ObjectId, ref: "Liga", require: false },
  nombre: { type: String },
  apellido: { type: String },
  cedula: { type: String },
  edad: { type: String },
  telefono: { type: String },
  direccion: { type: String },
  posicion: { type: String },
  numero: { type: String },
  goles: {
    aFavor: { default: 0, type: Number },
    enContra: { default: 0, type: Number }
  },
  tarjetas: {
    amarilla: { default: 0, type: Number },
    roja: { default: 0, type: Number }
  }
});

// Lets create (convert) this schema Model with ---> mongoose.model(modelName, schema):
const player = mongoose.model("player", playerSchema);

// Send it:
module.exports = player;

// [
//     {
//         "name":"Aaron",
//         "number":"1",
//         "position":"Mid"
//         },
// {
// "name":"Aaryan",
// "number":"2",
// "position":"Defense"
// },
// {
// "name":"Aaryn",
// "number":"3",
// "position":"Mid"
// },
// {
// "name":"Abdullah",
// "number":"4",
// "position":"Defense"
// },
// {
// "name":"Afonso",
// "number":"5",
// "position":"Mid"
// },
// {
// "name":"Bailey",
// "number":"6",
// "position":"Foward"
// },
// {
// "name":"Baxter",
// "number":"7",
// "position":"Mid"
// },
// {
// "name":"Cael",
// "number":"8",
// "position":"Defense"
// },
// {
// "name":"Daniel",
// "number":"9",
// "position":"Mid"
// },
// {
// "name":"Esteban",
// "number":"10",
// "position":"Foward"
// },
// ]
