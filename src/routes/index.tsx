import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Athletes from '~/pages/Athletes';
import Profile from '~/pages/Profile';
import Training from '~/pages/Training';
import NewAthlete from '~/pages/NewAthlete';
import AthletePerfil from '~/pages/AthletePerfil';
import NewTraining from '~/pages/NewTraining';
import TrainingInfo from '~/pages/TrainingInfo';
import AthleteTraining from '~/pages/AthleteTraining';
import AthleteEvaluation from '~/pages/AthleteEvaluation';
import TrainerList from '~/pages/TrainerList';
import Exercices from '~/pages/Exercices';
import Me from '~/pages/Me';
import UpgradePlan from '~/pages/UpgradePlan';
import Workout from '~/pages/Workout';
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/me" isPrivate component={Me} />
    <Route path="/dashboard" sideMenu component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/athletes" topBar sideMenu component={Athletes} isPrivate />
    <Route
      path="/training"
      linksUtils
      topBar
      sideMenu
      component={Training}
      isPrivate
    />
    <Route path="/new-athlete" component={NewAthlete} isPrivate />
    <Route path="/perfil-athlete" sideBar component={AthletePerfil} isPrivate />
    <Route path="/new-training" component={NewTraining} isPrivate />
    <Route path="/training-info" component={Workout} isPrivate />
    <Route path="/workout" sideMenu component={AthleteTraining} isPrivate />
    <Route
      path="/evaluations"
      sideMenu
      component={AthleteEvaluation}
      isPrivate
    />
    <Route path="/trainer" sideMenu component={TrainerList} isPrivate />
    <Route path="/exercices" sideMenu component={Exercices} isPrivate />
    <Route path="/upgrade-plan"  component={UpgradePlan} isPrivate />
  </Switch>
);

export default Routes;
