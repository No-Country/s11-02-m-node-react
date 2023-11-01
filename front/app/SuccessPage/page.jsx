import React from 'react';
import SuccessfullPayment from '../components/SuccessfullPayment/SuccessfullPayment';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const SuccessPage = () => {
     return (
          <PrivateRoute>
               <SuccessfullPayment />
          </PrivateRoute>
     );
};

export default SuccessPage;
