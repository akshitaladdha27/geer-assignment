export const metadata = {
  title: 'Geer Clone',
  description: 'E-commerce frontend using Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
