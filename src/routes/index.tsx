import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Layout from '~/components/Layout';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Athletes from '~/pages/Athletes';
import Account from '~/pages/Account';
import Training from '~/pages/Training';
import NewAthlete from '~/pages/NewAthlete';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Layout>
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/account" component={Account} isPrivate />
      <Route path="/athletes" component={Athletes} isPrivate />
      <Route path="/training" component={Training} isPrivate />
      <Route path="/newAthlete" component={NewAthlete} isPrivate />
    </Layout>
  </Switch>
);

export default Routes;
