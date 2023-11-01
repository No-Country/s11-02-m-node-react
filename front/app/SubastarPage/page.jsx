import React from 'react';
import SubastarForm from '../components/SubastarForm/SubastarForm';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const Subastar = () => {
     return (
          <PrivateRoute>
               <SubastarForm />
          </PrivateRoute>
     );
};

export default Subastar;
