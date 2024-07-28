import React from 'react';
import './globals.css';
import Navbar from './components/Header/Navbar';

export const metadata = {
  title: 'Hello!',
  description: 'Here is my application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
