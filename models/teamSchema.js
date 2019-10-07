// We create a Mongo db schema for this variable
// Copy from mongoose docs
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Player = mongoose.model("player")

const teamSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  flag: { type: String, required: true },
  players: [{ type: Schema.ObjectId, ref: "Player", require: true }]
});


// Lets create (convert) this schema Model with ---> mongoose.model(modelName, schema):
const team = mongoose.model("team", teamSchema);

// Send it:
module.exports = team;

// {
//   "name": "Panama",
// "code": "PAN",
// "flag": "https:\/\/upload.wikimedia.org\/wikipedia\/commons\/thumb\/a\/ab\/Flag_of_Panama.svg\/450px-Flag_of_Panama.png",
//   "players": [
//     "5d79b3ea5fa47a3f8dfaec38",
//     "5d79b37ed20c2e3ee412a847",
//     "5d79b3ef5fa47a3f8dfaec39",
//     "5d79b4698e35ce40c7b1c762",
//     "5d79b4808e35ce40c7b1c763",
//     "5d79b4888e35ce40c7b1c764",
//     "5d79b49a8e35ce40c7b1c765",
//     "5d79b4a58e35ce40c7b1c766",
//     "5d79b4ab8e35ce40c7b1c767"
//     ]
// }