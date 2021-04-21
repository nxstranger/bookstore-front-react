import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { setJwt } from '../../../modules/redux/authSlice';

const Logout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    localStorage.removeItem('RefreshToken');
    localStorage.removeItem('AccessToken');
    dispatch(setJwt(''));
  }, []);
  console.log('LogOut');
  return (
    <div>
      <Redirect to="/" />
    </div>
  );
};

export default Logout;
