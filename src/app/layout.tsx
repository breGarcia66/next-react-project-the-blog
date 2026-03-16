import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'The Blog',
    template: 'The Blog | $s',
  },
  description: 'Essa seria a descrição dessa página.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Container>
          <Header />

          {children}

          <footer>
            <h1 className='text-6xl font-bold text-center py-8'>Rodapé</h1>
          </footer>
        </Container>
      </body>
    </html>
  );
}
