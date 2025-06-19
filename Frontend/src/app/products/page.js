'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://geer-assignment.onrender.com/products') 
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load products:', err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Product Listing</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '0.5rem 1rem',
          margin: '1rem 0',
          width: '100%',
          maxWidth: '400px',
          border: '1px solid #ccc',
          borderRadius: '6px',
        }}
      />

      {/* Product Grid or Loading */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem',
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <div
                  style={{
                    border: '1px solid #ddd',
                    padding: '1rem',
                    borderRadius: '8px',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </main>
  );
}
