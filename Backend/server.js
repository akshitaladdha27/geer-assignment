const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// In-memory product list
let products = [
  { id: '1', name: 'Ring', price: 999, imageUrl: '/ring.webp' },
  { id: '2', name: 'Necklace', price: 1599, imageUrl: '/necklace.jpg' },
  { id: '3', name: 'Bangles', price: 1999, imageUrl: '/bangles.webp' },
];


// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST new product
app.post('/products', (req, res) => {
  const { name, price, imageUrl } = req.body;
  const newProduct = {
    id: Date.now().toString(),
    name,
    price,
    imageUrl,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE product by id
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const deleted = products.splice(index, 1);
  res.status(200).json(deleted[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
