import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
// import AppProvider from './providers';
import Routes from './routes';

/**
 * Wraps the providers around the routes and applies the global style to the whole app.
 */
function App() {
  return (
    // <AppProvider>
    <>
        <GlobalStyle />
    <Routes />
    </>
    // </AppProvider>
  );
}

export default App;
