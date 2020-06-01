import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Athletes from '~/pages/Athletes';
import Account from '~/pages/Account';
import Training from '~/pages/Training';
import NewAthlete from '~/pages/NewAthlete';
import AthletePerfil from '~/pages/AthletePerfil';
import NewTraining from '~/pages/NewTraining';
import TrainingInfo from '~/pages/TrainingInfo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/account" component={Account} isPrivate />
    <Route path="/athletes" topBar sideBar component={Athletes} isPrivate />
    <Route path="/training" topBar sideBar component={Training} isPrivate />
    <Route path="/new-athlete" component={NewAthlete} isPrivate />
    <Route path="/perfil-athlete" sideBar component={AthletePerfil} isPrivate />
    <Route path="/new-training" component={NewTraining} isPrivate />
    <Route path="/training-info" sideBar component={TrainingInfo} isPrivate />
  </Switch>
);

export default Routes;
