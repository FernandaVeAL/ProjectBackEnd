const express = require("express");
const router = express.Router();
const Funcionario = require("../models/funcionario");
const bcrypt = require("bcrypt");

router.post("", (req, res, next) => {
  bcrypt.hash(req.body.senha, 10).then((hash) => {
    const funcionario = new Funcionario({
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      senha: hash,
      tipoUsuario: req.body.tipoUsuario,
    });
    funcionario.save().then((funcionarioInserido) => {
      res.status(201).json({
        mensagem: "Funcionario inserido",
        id: funcionarioInserido._id,
      });
    });
  });
});

router.get("", (req, res, next) => {
  Funcionario.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      funcionarios: documents,
    });
  });
});
router.get("/:id", (req, res, next) => {
  Funcionario.findById(req.params.id).then((cli) => {
    if (cli) {
      res.status(200).json(cli);
    } else res.status(404).json({ mensagem: "Funcionario não encontrado!" });
  });
});
router.get("/:email", (req, res, next) => {
  Funcionario.findOne(req.params.email).then((err, usu) => {
    if (usu) {
      res.status(200).json(usu);
    } else res.status(404).json({ mensagem: "Usuário não encontrado!" });
  });
});
router.delete("/:id", (req, res, next) => {
  Funcionario.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({ mensagem: "Funcionario removido" });
  });
});
router.put("/:id", (req, res, next) => {
  const funcionario = new Funcionario({
    _id: req.params.id,
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    senha: req.body.senha,
  });
  Funcionario.updateOne({ _id: req.params.id }, funcionario).then(
    (resultado) => {
      console.log(resultado);
    }
  );
  res.status(200).json({ mensagem: "Atualização realizada com sucesso" });
});
module.exports = router;
