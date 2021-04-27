import React, { useEffect, useState } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useAppSelector } from '../../../modules/redux/hooks';

interface wrapperProps extends LinkProps{
  itTrue: boolean
}

const IsAuthLinkWrapper = (props: wrapperProps) => {
  const { children, itTrue, ...rest } = props;
  const role = useAppSelector((state) => state.auth.role);
  const [admin, setAdmin] = useState(!!(role && role.role === 2));
  useEffect(() => {
    if ((role && role.role === 2)) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [role]);
  return (
    <>
      { (role && itTrue && admin) || (!role && !itTrue && admin)
        ? (<Link {...rest}>{children}</Link>)
        : ('')}
    </>
  );
};

export default IsAuthLinkWrapper;
