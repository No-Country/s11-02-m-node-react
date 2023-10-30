import React from 'react';
import MiSaldo from '../components/Saldo/MiSaldo';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const Saldo = () => {
     return (
          <PrivateRoute>
               <MiSaldo />
          </PrivateRoute>
     );
};

export default Saldo;
