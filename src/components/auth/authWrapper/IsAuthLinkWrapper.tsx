import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useAppSelector } from '../../../modules/redux/hooks';

interface wrapperProps extends LinkProps{
  itTrue: boolean
}

const IsAuthLinkWrapper = (props: wrapperProps) => {
  const { children, itTrue, ...rest } = props;
  const jwt = useAppSelector((state) => state.auth.authJwt);
  return (
    <>
      { (jwt && itTrue) || (!jwt && !itTrue)
        ? (<Link {...rest}>{children}</Link>)
        : ('')}
    </>
  );
};

export default IsAuthLinkWrapper;
