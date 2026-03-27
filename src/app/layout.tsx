import type { Metadata } from 'next';
import './globals.css';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The Blog',
    template: 'The Blog | %s',
  },
  description: 'Essa seria a descrição dessa página.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body cz-shortcut-listen="true">
        <Container className='min-h-screen flex flex-col justify-between'>
          <Header />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
