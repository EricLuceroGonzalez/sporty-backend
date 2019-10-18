// Servidor en express
const express = require("express");
const app = express();
// import CORS
const cors = require("cors");
// Use CORS
app.use(cors());

// Check port
const port = process.env.PORT || 3001;

// const passport = require("passport");
// const users = require("./users");

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
const Equipo = require("../models/equipo");

// -------------   CRUD  -----------------
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

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

//crear un Equipo dentro de una liga
app.post("/api/equipo", (req, res) => {
  const nuevaEquipo = req.body;
  const equipoNuevo = new Equipo(nuevaEquipo);
  equipoNuevo.save((err, equipoNuevo) => {
    return err
      ? res
          .status(400)
          .send({ mensaje: "error en el post", res: equipoNuevo, err })
      : res.status(201).send({ message: "Equipo creado", res: equipoNuevo });
  });
  console.log(equipoNuevo);
});

//obtener todos los deportes
app.get("/api/deportes", (req, res) => {
  Deporte.find()
    .exec()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
});

//get all Ligas by id
app.get("/api/liga", function(req, res) {
  Liga.find({}, function(err, liga) {
    Deporte.populate(liga, { path: "deporte" }, function(err, liga) {
      return err
        ? res.status(400).send({ mensaje: "Hay un error", res: err })
        : res.status(200).send({ mensaje: "Ligas!!", res: liga });
    });
  });
});

// Get one liga by ID
app.get("/api/ligaDetailsss/:id", function(req, res) {
  Liga.findById(req.params.id)
    .exec()
    .then(liga => res.status(200).send({ mensaje: "Ligas!!", res: liga }))
    .catch(err => res.status(400).send({ mensaje: "Hay un error", res: err }));
});

app.get("/api/ligaDetail/:id", function(req, res) {
  Liga.findById(req.params.id)
    .populate("deporte")
    .exec()
    .then(liga => res.status(200).send({ mensaje: "Ligas!!", res: liga }))
    .catch(err => res.status(400).send({ mensaje: "Hay un error", res: err }));
});

// ---------- POST

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

app.post("/api/player", (req, res) => {
  // Recibir el jugador
  console.log(req.body);

  // Guardar en db
  const newPlayer = new Player(req.body);
  newPlayer.save((err, newPlayer) => {
    return err
      ? res.status(400).send({ mensaje: "Hay un error - post Player", res: err })
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
// app.use(passport.initialize()); // Passport config
// require("../config/passport")(passport); // Routes
// app.use("./users", users);

// Send variables when this file is 'required'
module.exports = { app, port };
