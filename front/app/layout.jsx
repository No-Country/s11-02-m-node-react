import './globals.css';
import Providers from './store/provider';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Index';
import Footer from './components/Footer/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
     title: 'ReutilizApp',
     description: 'Economía Circular',
     favicon: '../public/recycle.svg',
};

export default function RootLayout({ children }) {
     return (
          <html lang="en">
               <head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <link
                         rel="icon"
                         type="image/x-icon"
                         href={metadata.favicon}
                    />
               </head>
               <Providers>
                    <body>
                         <Navbar />
                         <main className="min-h-screen">
                              <ToastContainer />
                              {children}
                         </main>
                         <Footer />
                    </body>
               </Providers>
          </html>
     );
}
