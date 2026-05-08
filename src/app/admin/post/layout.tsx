import { MenuAdmin } from '@/components/admin/MenuAdmin';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
