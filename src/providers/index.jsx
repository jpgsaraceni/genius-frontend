import React from 'react';

import PropTypes from 'prop-types';
// import { SomeProvider } from './SomeProvider';
// import { SomeParentProvider } from './SomeParentProvider';

/**
 * Wraps all the providers used in the application. Call only AppProvider in App.js.
 *
 * @param {JSX.Element} children - a provider (with possibly other providers nested inside). 
 * Put the parent providers - that will be accessed by its children - 
 * wrapping the children providers.
 * @returns {JWX.Element} One provider for the whole application.
 */
function AppProvider({ children }) {
  return (
    <>
      {/* <SomeParentProvider> */}
      {/* <SomeProvider> */}
      {children}
      {/* </SomeProvider> */}
      {/* </SomeParentProvider> */}
    </>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
