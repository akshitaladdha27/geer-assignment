import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🛍️ Welcome to Geer Clone</h1>
      <p>Simple e-commerce frontend using Next.js App Router</p>
      <Link href="/products">
        <button style={{ marginTop: '1rem', padding: '10px 20px' }}>Go to Products</button>
      </Link>
    </main>
  );
}
