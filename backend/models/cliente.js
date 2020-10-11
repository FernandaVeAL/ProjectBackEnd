//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const clienteSchema = mongoose.Schema ({
 nome: {type: String, required: true},
 email: {type: String, required: true},
 cpf: {type: String, required:false},
 telefone: {type: String, required: false, default: '00000000'},
 senha: {type: String, required: true},
});
//criamos o modelo associado ao nome Cliente e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Cliente', clienteSchema);