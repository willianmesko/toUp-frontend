import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

const SignIn = lazy(() => import('~/pages/SignIn'));
const SignUp = lazy(() => import('~/pages/SignUp'));
const Dashboard = lazy(() => import('~/pages/Dashboard'));
const Athletes = lazy(() => import('~/pages/Athletes'));
const Profile = lazy(() => import('~/pages/Profile'));
const Training = lazy(() => import('~/pages/Training'));
const NewAthlete = lazy(() => import('~/pages/NewAthlete'));
const AthletePerfil = lazy(() => import('~/pages/AthletePerfil'));
const NewTraining = lazy(() => import('~/pages/NewTraining'));
const TrainingInfo = lazy(() => import('~/pages/TrainingInfo'));
const AthleteTraining = lazy(() => import('~/pages/AthleteTraining'));
const AthleteEvaluation = lazy(() => import('~/pages/AthleteEvaluation'));
const TrainerList = lazy(() => import('~/pages/TrainerList'));
const Exercices = lazy(() => import('~/pages/Exercices'));
const Me = lazy(() => import('~/pages/Me'));
const UpgradePlan = lazy(() => import('~/pages/UpgradePlan'));


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/me" isPrivate component={Me} />
    <Route path="/dashboard" menu component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/athletes" menu component={Athletes} isPrivate />
    <Route
      path="/training"
      menu
      component={Training}
      isPrivate
    />
    <Route path="/new-athlete" component={NewAthlete} isPrivate />
    <Route path="/perfil-athlete" component={AthletePerfil} isPrivate />
    <Route path="/new-training" component={NewTraining} isPrivate />
    <Route path="/training-info" component={TrainingInfo} isPrivate />
    <Route path="/workout" menu component={AthleteTraining} isPrivate />
    <Route
      path="/evaluations"
      menu
      component={AthleteEvaluation}
      isPrivate
    />
    <Route path="/trainer" menu component={TrainerList} isPrivate />
    <Route path="/exercices" menu component={Exercices} isPrivate />
      <Route path="/upgrade-plan" component={UpgradePlan} isPrivate />
  </Switch>
);

export default Routes;
