import React, { useEffect, useState } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useAppSelector } from '../../../modules/redux/hooks';

interface wrapperProps extends LinkProps{
  itTrue: boolean
}

const IsAuthLinkWrapper = (props: wrapperProps) => {
  const { children, itTrue, ...rest } = props;
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const [admin, setAdmin] = useState(!!jwt);
  useEffect(() => {
    if (jwt) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [jwt]);
  return (
    <>
      { (jwt && itTrue && admin) || (!jwt && !itTrue && admin)
        ? (<Link {...rest}>{children}</Link>)
        : ('')}
    </>
  );
};

export default IsAuthLinkWrapper;
