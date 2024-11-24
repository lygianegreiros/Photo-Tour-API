const { registroSchema } = require('../validation/registroValidation');
const Registro = require('../models/Registro');

exports.createRegistro = async (req, res) => {
  const { error } = registroSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { localizacao, descricao } = req.body;
  const foto = req.file ? req.file.path : null;

  const registro = new Registro({
    foto,
    localizacao,
    descricao,
    data: new Date()
  });

  try {
    await registro.save();
    res.status(201).json(registro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar o registro' });
  }
};

exports.getRegistros = async (req, res) => {
  try {
    const registros = await Registro.find();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar registros' });
  }
};
