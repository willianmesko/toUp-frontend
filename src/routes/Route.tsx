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
  sideMenu?: boolean;
  linksUtils?: boolean;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  sideBar = false,
  topBar = false,
  sideMenu = false,
  linksUtils = false,
  component: Component,
  ...rest
}) => {
  const { user, role } = useAuth();

  if (!user && isPrivate) {
    return <Redirect to="/" />;
  }

  if (user && !isPrivate) {
    if (role === 'trainer') {
      return <Redirect to="/athletes" />;
    }
    return <Redirect to="/workout" />;
  }
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (isPrivate)
          return (

            <Layout
              topBar={topBar}
              linksUtils={linksUtils}
              sideBar={sideBar}
              sideMenu={sideMenu}
            >

              <Component />

            </Layout>
          );

        return <Component />;
      }}
    />
  );
};

export default Route;
