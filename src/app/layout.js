import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Hello!',
  description: 'Here is my application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
