import Footer from '@/components/layouts/Footer/page';
import Header from '@/components/layouts/Header/page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
