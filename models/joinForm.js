// We create a Mongo db schema for this variable
// Copy from mongoose docs
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const joinSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  birthdate: { type: String, required: true },
  idNumber: { type: Number, required: false, default: 0 },
  league: [
    { name: { type: String } },
    { teams: { type: Number } },
    { location: { type: String } }
  ],
  address: [
    { province: { type: String } },
    { district: { type: String } },
    { city: { type: String } }
  ]
});

// Lets create (convert) this schema Model with ---> mongoose.model(modelName, schema):
const joinForm = mongoose.model("player", joinSchema);

// Send it:
module.exports = joinForm;
