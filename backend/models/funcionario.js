const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const funcionarioSchema = mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: false, default: "00000000" },
  senha: { type: String, required: true },
  tipoUsuario: { type: String, required: true },
});

funcionarioSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Funcionario", funcionarioSchema);
