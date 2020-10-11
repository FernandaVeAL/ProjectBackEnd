const express = require(`express`);
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());
const Cliente = require("./models/cliente");

mongoose
  .connect(
    "mongodb+srv://fefa:<senha>@cluster0.y6usl.mongodb.net/projeto?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conexão OK"))
  .catch(() => console.log("Conexão NOK"));

const clientes = [
  {
    nome: "Beatriz",
    cpf: "426.941.110-65",
    email: "beatriz@email.com",
    telefone: "(78)12346-7467",
    senha: "xxxxxx",
  },
  {
    nome: "Arthur",
    cpf: "758.618.615-89",
    email: "arthur@email.com",
    telefone: "(34)82695-8483",
    senha: "xxxxxx",
  },
  {
    nome: "Chiclete Leona",
    cpf: "78.945.612/1000-78",
    email: "secretaria@chicleteleona.com",
    telefone: "(15)7854-7829",
    senha: "xxxxxx",
  },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE,OPTIONS"
  );
  next();
});

app.post("/api/clientes", (req, res, next) => {
  const cliente = new Cliente({
    nome: req.body.nome,
    email: req.body.email,
    cpf: req.body.cpf,
    telefone: req.body.telefone,
    senha: req.body.senha,
  });
  cliente.save().then((clienteInserido) => {
    res.status(201).json({
      mensagem: "Cliente inserido",
      id: clienteInserido._id,
    });
  });
});

app.get("/api/clientes", (req, res, next) => {
  Cliente.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      clientes: documents,
    });
  });
});
app.get("/api/clientes/:email", (req, res, next) => {
  Cliente.findById(req.params.email).then((cli) => {
    if (cli) {
      res.status(200).json(cli);
    } else res.status(404).json({ mensagem: "Cliente não encontrado!" });
  });
});
app.delete("/api/clientes/:id", (req, res, next) => {
  Cliente.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({ mensagem: "Cliente removido" });
  });
});

module.exports = app;
