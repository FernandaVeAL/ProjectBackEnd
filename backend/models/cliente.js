const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const clienteSchema = mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cpf: { type: String, required: false },
  telefone: { type: String, required: false, default: "00000000" },
  senha: { type: String, required: true },
  tipoUsuario: { type: String, required: true },
});

clienteSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Cliente", clienteSchema);
