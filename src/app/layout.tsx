import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const geistSans = localFont({
  src: '../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'JustXchange',
  description: 'Generated by JustXchange',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AuthProvider>
          {/* Header Section */}
          <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
            <Header />
          </div>

          {/* Main Content Section */}
          <div className="flex-1 pt-[80px] pb-[20px] overflow-auto">
            <div className="layout-content-container flex flex-col max-w-[1150px] mx-auto">
              {children}
            </div>
          </div>

          {/* Footer Section */}
          <div className="footer-content mt-auto">
            <Footer />
          </div>

          {/* Toast Notifications */}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
