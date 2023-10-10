import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Index';
import Footer from './components/Footer/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
     title: 'ReciclApp',
     description: 'Economía Circular',
};

export default function RootLayout({ children }) {
     return (
          <html lang="en">
               <head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
               </head>
               <body>
                    <Navbar />
                    <main className="min-h-screen">
                         <ToastContainer />
                         {/* <main className="flex min-h-screen items-center  p-8 mt-8 md:p-24"> */}
                         {children}
                    </main>
                    <Footer />
               </body>
          </html>
     );
}
