import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import AppProvider from '~/hooks';

import Routes from '~/routes';

import GlobalStyle from '~/styles/global';

const App = () => (
  <BrowserRouter>
    <LastLocationProvider>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </LastLocationProvider>
  </BrowserRouter>
);

export default App;
