
import "./globals.css";
import Navbar from "./nav/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='container mx-auto px-5 pt-10'>
          {children}
        </main>
      </body>
    </html>
  );
}
