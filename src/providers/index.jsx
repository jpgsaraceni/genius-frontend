import React from 'react';

import PropTypes from 'prop-types';
// import { NameOfProvider } from './NameOfProvider';

function AppProvider({ children }) {
  return (
    <AppProvider>
        {children}
    </AppProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
