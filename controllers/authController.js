const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  try {
    const usuario = new Usuario({
      username: req.body.username,
      password: hashedPassword
    });
    await usuario.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar o usuário' });
  }
};

exports.login = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ username: req.body.username });
    if (!usuario) return res.status(404).json({ auth: false, token: null });

    const passwordIsValid = bcrypt.compareSync(req.body.password, usuario.password);
    if (!passwordIsValid) return res.status(401).json({ auth: false, token: null });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: 86400 });
    res.status(200).json({ auth: true, token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};
