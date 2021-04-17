import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../modules/redux/hooks';

interface PrivateRouteProps extends RouteProps {
  component: any;
  itTrue: boolean
}

const IsAuthWrapper = (props: PrivateRouteProps) => {
  const { itTrue, component: Component, ...rest } = props;
  const jwt = useAppSelector((state) => state.auth.authJwt);
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        (jwt && itTrue) || (!jwt && !itTrue)
          ? <Component {...routeProps} />
          : (
            <Redirect to={{ pathname: '/', state: { from: routeProps.location } }} />
          ))}
    />
  );
};

export default IsAuthWrapper;
