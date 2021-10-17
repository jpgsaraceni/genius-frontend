import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Context provides a way to pass data through the component tree
 * without having to pass props down manually at every level.
 *
 * This provider is a template provider. Substitute the word 'some' for tour provider name.
 *
 * To access this provider in a component:
 * @example
 * import { useContext } from 'react';
 * import SomeContext from '../../providers/SomeProvider';
 *
 * const { someState, setSomeState, someMethod } = useContext(SomeContext);
 */
const SomeContext = createContext({});

export const SomeProvider = ({ children }) => {
  const [someState, setSomeState] = useState();

  function someMethod() {
  };

  /**
   * The values attribute contains the methods that can be called when a component uses
   * this provider, through the useContext hook (context api).
   */
  return (
    <SomeContext.Provider
      value={{
        someState,
        setSomeState,
        someMethod,
      }}
    >
      {children}
    </SomeContext.Provider>
  );
};

SomeProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SomeContext;