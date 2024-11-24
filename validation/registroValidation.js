const Joi = require('joi');

const registroSchema = Joi.object({
  localizacao: Joi.string().required(),
  descricao: Joi.string().required(),
  foto: Joi.string().required()
});

module.exports = { registroSchema };
