const express = require("express");
const router = express.Router();
const Cliente = require("../models/cliente");
const bcrypt = require("bcrypt");

router.post("", (req, res, next) => {
  bcrypt.hash(req.body.senha, 10).then((hash) => {
    const cliente = new Cliente({
      nome: req.body.nome,
      email: req.body.email,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
      senha: hash,
      tipoUsuario: req.body.tipoUsuario,
    });
    cliente.save().then((clienteInserido) => {
      res.status(201).json({
        mensagem: "Cliente inserido",
        id: clienteInserido._id,
      });
    });
  });
});

router.get("", (req, res, next) => {
  Cliente.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      clientes: documents,
    });
  });
});
router.get("/:id", (req, res, next) => {
  Cliente.findById(req.params.id).then((cli) => {
    if (cli) {
      res.status(200).json(cli);
    } else res.status(404).json({ mensagem: "Cliente não encontrado!" });
  });
});
router.get("/:email", (req, res, next) => {
  Cliente.findOne(req.params.email).then((err, usu) => {
    if (usu) {
      res.status(200).json(usu);
    } else res.status(404).json({ mensagem: "Usuário não encontrado!" });
  });
});
router.delete("/:id", (req, res, next) => {
  Cliente.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({ mensagem: "Cliente removido" });
  });
});
router.put("/:id", (req, res, next) => {
  const cliente = new Cliente({
    _id: req.params.id,
    nome: req.body.nome,
    email: req.body.email,
    cpf: req.body.cpf,
    telefone: req.body.telefone,
    senha: req.body.senha,
  });
  Cliente.updateOne({ _id: req.params.id }, cliente).then((resultado) => {
    console.log(resultado);
  });
  res.status(200).json({ mensagem: "Atualização realizada com sucesso" });
});
module.exports = router;
