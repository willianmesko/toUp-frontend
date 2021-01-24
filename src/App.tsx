import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import AppProvider from '~/hooks';
import LazyLoading from '~/components/LazyLoading';
import Routes from '~/routes';

import GlobalStyle from '~/styles/global';

const App = () => (

  <BrowserRouter >
    <LastLocationProvider>
      <AppProvider>
        <Suspense fallback={<LazyLoading />}>
          <Routes />
        </Suspense>
      </AppProvider>
      <GlobalStyle />
    </LastLocationProvider>
  </BrowserRouter>

);

export default App;
