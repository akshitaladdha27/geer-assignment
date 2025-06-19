const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

let products = [
  { id: '1', name: 'Ring', price: 999, imageUrl: '/ring.webp' },
  { id: '2', name: 'Necklace', price: 1599, imageUrl: '/necklace.jpg' },
  { id: '3', name: 'Bangles', price: 1999, imageUrl: '/bangles.webp' },
];

app.get('/products', (req, res) => {
  res.json(products);
});

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

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const deleted = products.splice(index, 1);
  res.status(200).json(deleted[0]);
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
