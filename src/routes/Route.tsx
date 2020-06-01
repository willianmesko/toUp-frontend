import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { Layout } from '~/components/Layout';
import { useAuth } from '~/hooks/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  sideBar?: boolean;
  topBar?: boolean;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  sideBar = false,
  topBar = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  if (!user && isPrivate) {
    return <Redirect to="/" />;
  }

  if (user && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (isPrivate)
          return (
            <Layout topBar={topBar} sideBar={sideBar}>
              <Component />
            </Layout>
          );

        return <Component />;
      }}
    />
  );
};

export default Route;
