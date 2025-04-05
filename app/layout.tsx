import './styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mening Blogim',
  description: 'Shaxsiy blog sayti',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}