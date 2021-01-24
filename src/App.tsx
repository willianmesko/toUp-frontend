import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import AppProvider from '~/hooks';
import LazyLoading from '~/components/LazyLoading';
import Routes from '~/routes';

import GlobalStyle from '~/styles/global';

const App = () => (
  <Suspense fallback={<LazyLoading />}>
    <BrowserRouter >
      <LastLocationProvider>
        <AppProvider>

          <Routes />

        </AppProvider>
        <GlobalStyle />
      </LastLocationProvider>
    </BrowserRouter>
  </Suspense>

);

export default App;
