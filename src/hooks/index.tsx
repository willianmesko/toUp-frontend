import React from 'react';

import { AuthProvider } from './AuthContext';
import { AthleteProvider } from './AthleteContext';
import { TrainingProvider } from './TrainingContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <AthleteProvider>
        <TrainingProvider>{children}</TrainingProvider>
      </AthleteProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
