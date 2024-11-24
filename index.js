const express = require('express');
const app = express();
const port = 27017;
const db = require('./config/db'); 
const registroRoutes = require('./routes/registroRoutes');
const authRoutes = require('./routes/authRoutes'); 
const errorHandler = require('./middlewares/errorHandler');

app.use('/api', registroRoutes); app.use('/auth', authRoutes);
app.use('/api', registroRoutes); 
app.use(errorHandler);
app.use('/auth', authRoutes);
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api', registroRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
