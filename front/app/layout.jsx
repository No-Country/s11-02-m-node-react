import './globals.css';
import Providers from './store/provider';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Index';
import Footer from './components/Footer/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
     title: 'EcoSubasta',
     icons: {
          icon: ['../public/favicon.ico'],
     },
};

export default function RootLayout({ children }) {
     return (
          <html lang="en">
               <head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
               </head>

               <body>
                    <Providers>
                         <Navbar />
                         <main className="min-h-screen font-poppins">
                              <ToastContainer />
                              {children}
                         </main>
                         <Footer />
                    </Providers>
               </body>
          </html>
     );
}
