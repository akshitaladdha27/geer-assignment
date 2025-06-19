export default async function ProductDetail ({ params }) {
  
  const  {id}  = params;
  // const id = await params?.id;

  const products = [
    {
      id: '1',
      name: 'Ring',
      price: 999,
      image: '/ring.webp',
      description: 'A pure gold ring with diamond',
    },
    {
      id: '2',
      name: 'Necklace',
      price: 1599,
      image: '/necklace.jpg',
      description: 'A pure Gold Necklace with precious design',
    },
    {
      id: '3',
      name: 'Bangles',
      price: 2099,
      image: '/bangles.webp',
      description: 'A pure Bangle with expensive design',
    }
  ];

  const product = products.find(p => p.id === id);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}
