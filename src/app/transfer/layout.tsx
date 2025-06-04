import { Navbar } from '../../features/home/navbar';

export default function TransferLayout({
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