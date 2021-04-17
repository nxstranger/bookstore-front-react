import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../modules/redux/hooks';

interface PrivateRouteProps extends RouteProps {
  component: any;
  itTrue: boolean
}

const IsAdminWrapper = (props: PrivateRouteProps) => {
  const { itTrue, component: Component, ...rest } = props;
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
    <Route
      {...rest}
      render={(routeProps) => (
        (jwt && itTrue && admin) || (!jwt && !itTrue && admin)
          ? <Component {...routeProps} />
          : (
            <Redirect to={{ pathname: '/', state: { from: routeProps.location } }} />
          ))}
    />
  );
};

export default IsAdminWrapper;
