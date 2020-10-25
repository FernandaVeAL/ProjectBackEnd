const express = require(`express`);
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());
const clienteRoutes = require("./rotas/clientes");
const funcionarioRoutes = require("./rotas/funcionarios");

mongoose
  .connect(
    "mongodb+srv://fefa:senha@cluster0.y6usl.mongodb.net/projeto?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conexão OK"))
  .catch(() => console.log("Conexão NOK"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT,DELETE,OPTIONS"
  );
  next();
});

app.use("/api/clientes", clienteRoutes);
app.use("/api/funcionarios", funcionarioRoutes);

module.exports = app;
