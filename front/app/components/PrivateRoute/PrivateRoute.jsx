'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
     const router = useRouter();
     const isUserAuthenticated = useSelector(
          (state) => state.auth.isUserAuthenticated
     );

     useEffect(() => {
          if (!isUserAuthenticated) {
               router.push('/'); // Redirige al usuario a la página de inicio de sesión si no está autenticado
          }
     }, [isUserAuthenticated, router]);

     return isUserAuthenticated ? children : null;
};

export default PrivateRoute;
