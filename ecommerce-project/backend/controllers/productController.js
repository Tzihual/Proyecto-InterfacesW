const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto' });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    const newProduct = new Product({ name, price, description, category, stock });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar producto' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,  // Exportar la nueva función
};
