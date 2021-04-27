import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../../modules/redux/hooks';

interface PrivateRouteProps extends RouteProps {
  component: any;
  itTrue: boolean
}

const IsAdminWrapper = ({ itTrue, component: Component, ...rest }: PrivateRouteProps) => {
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
    <Route
      {...rest}
      render={(routeProps) => (
        (role && itTrue && admin) || (!role && !itTrue && admin)
          ? <Component {...routeProps} />
          : (
            <Redirect to={{ pathname: '/', state: { from: routeProps.location } }} />
          ))}
    />
  );
};

export default IsAdminWrapper;
