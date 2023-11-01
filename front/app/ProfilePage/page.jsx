'use client';
import React from 'react';
import ProfileView from '../components/Profile/ProfileView';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const Profile = () => {
     return (
          <PrivateRoute>
               <ProfileView />
          </PrivateRoute>
     );
};

export default Profile;
