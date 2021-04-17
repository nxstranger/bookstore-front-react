import React from 'react';
import { useSelector } from 'react-redux';
import RegisterForm from './RegirterForm';
import { selectAuth } from '../../../modules/redux/authSlice';

function Registration() {
  const selector = useSelector(selectAuth);
  return (
    <div>
      <span>{(selector) ? 'isAuth' : 'Unauthorized' }</span>
      <RegisterForm />
    </div>
  );
}

export default Registration;
