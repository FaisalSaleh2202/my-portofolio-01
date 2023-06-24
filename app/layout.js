'use client';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

import styles from '../styles';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head></head>
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
