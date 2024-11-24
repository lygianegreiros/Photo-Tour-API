const express = require('express');
const router = express.Router();
const multer = require('multer');
const verificarToken = require('../middlewares/authMiddleware');
const registroController = require('../controllers/registroController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/upload', verificarToken, upload.single('foto'), registroController.createRegistro);
router.get('/registros', verificarToken, registroController.getRegistros);

module.exports = router;
