// We create a Mongo db schema for this variable
// Copy from mongoose docs
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  position: { type: String, required: true },
  rating: { type: Number, required: false, default: 0 },
  minutes_played: { type: Number, required: false, default: 0 },
  captain: { type: Boolean, required: false, default: false },
  substitute: { type: Boolean, required: false, default: false }
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
