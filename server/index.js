// Servidor en express
const express = require("express");
const app = express();
// import CORS
const cors = require("cors");
// Use CORS
app.use(cors());

// Check port
const port = process.env.port || 3000;

const passport = require("passport");
const users = require("./users");

var dotenv = require("dotenv");
dotenv.config();

// ----------- BODY PARSER  ---------------
var bodyParser = require("body-parser"); // for parsing application/json
app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Require Schema's
const Player = require("../models/playerSchema");
const Team = require("../models/teamSchema");
const Deporte = require("../models/deporte");
const Liga = require("../models/liga");
const Equipo = require('../models/equipo');

// -------------   CRUD  -----------------
app.get("/", (req, res) => {
  res.send("Hello World!!!");
  console.log("Hello World");
});

//  C: CREATE ------------
//  C: CREATE ------------
app.post("/api/deporte", (req, res) => {
  // Recibir el jugador
  console.log(req.body);

  // Guardar en db
  const newDeporte = new Deporte(req.body);
  newDeporte.save((err, newDeporte) => {
    return err
      ? res.status(400).send({ mensaje: "Hay un error", res: err })
      : res.status(200).send({ mensaje: "Deporte guardado", res: newDeporte });
  });
});

app.post("/api/liga", (req, res) => {
  // Recibir el jugador
  console.log(req.body);

  // Guardar en db
  const newLeague = new Liga(req.body);
  newLeague.save((err, newLeague) => {
    return err
      ? res.status(400).send({ mensaje: "Hay un error", res: err })
      : res.status(200).send({ mensaje: "Liga creada", res: newLeague });
  });
});

//crear un Equipo dentro de una liga
app.post('/api/v1/equipo', (req, res)=>{
  const nuevaEquipo = req.body;
  const equipoNuevo = new Equipo(nuevaEquipo);
  equipoNuevo.save((err, equipoNuevo)=>{
      return err
      ? res.status(400).send({mensaje: 'error en el post', res:equipoNuevo, err}):
      res.status(201).send({message: 'Equipo creado', res: equipoNuevo});
  });
  console.log(equipoNuevo);
})

app.post("/api/player", (req, res) => {
  // Recibir el jugador
  console.log(req.body);


  // Guardar en db
  const newPlayer = new Player(req.body);
  newPlayer.save((err, newPlayer) => {
    return err
      ? res.status(400).send({ mensaje: "Hay un error", res: err })
      : res.status(200).send({ mensaje: "Player guardado", res: newPlayer });
  });
});

//  C: CREATE ------------
app.post("/api/team", (req, res) => {
  // Recibir el jugador
  console.log(req.body);

  // Guardar en db
  const newTeam = new Team(req.body);
  newTeam.save((err, newTeam) => {
    return err
      ? res.status(400).send({ mensaje: "Hay un error", res: err })
      : res.status(200).send({ mensaje: "Player guardado", res: newTeam });
  });
});

// Passport middleware
app.use(passport.initialize()); // Passport config
require("../config/passport")(passport); // Routes
app.use("./users", users);

// Send variables when this file is 'required'
module.exports = { app, port };
