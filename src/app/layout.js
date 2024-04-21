import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JavaScript Playground',
  description:
    'Learn JavaScript from the ground up, from beginner to advanced topics.',
};

export const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar>{children}</NavBar>
      </body>
    </html>
  );
};

export default RootLayout;
