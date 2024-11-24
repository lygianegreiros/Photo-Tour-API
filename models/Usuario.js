const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
