import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Space_Grotesk({ subsets: ['latin'] });

export const metadata = {
  title: 'Hello JVM!',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
