require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Rutas
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Ruta para la raíz ("/")
app.get('/', (req, res) => {
  res.send('Bienvenido al backend de la tienda eCommerce');
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log('Error en la conexión a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
