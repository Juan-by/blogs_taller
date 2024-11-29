const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json()); 
const PORT = process.env.PORT 

const BlockRoutes = require('./Routes/BlockRoutes');
app.use('/api',BlockRoutes);





app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });