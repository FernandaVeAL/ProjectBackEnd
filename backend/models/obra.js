const mongoose = require("mongoose");

const obraSchema = mongoose.Schema({
  inicio: { type: Date, required: true },
  termino: { type: Date, required: true },
  tipo: { type: String, required: true },
  porte: { type: String, required: true },
  endereco: { type: String, required: true },
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  complemento: { type: String, required: true },
  cep: { type: String, required: true },
  aviso: { type: String, required: true },
  progresso: { type: String, required: true },
  descricao: { type: String, required: true },
});

module.exports = mongoose.model("Obra", obraSchema);
