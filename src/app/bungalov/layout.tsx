import { Navbar } from '../../features/home/navbar';

export default function BungalovLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} 