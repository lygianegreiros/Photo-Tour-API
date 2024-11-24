const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).json({ auth: false, message: 'Nenhum token fornecido.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ auth: false, message: 'Falha na autenticação do token.' });
    req.userId = decoded.id;
    next();
  });
};

module.exports = verificarToken;
