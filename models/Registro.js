const mongoose = require('mongoose');

const RegistroSchema = new mongoose.Schema({
  foto: String,
  localizacao: String,
  descricao: String,
  data: Date
});

module.exports = mongoose.model('Registro', RegistroSchema);
