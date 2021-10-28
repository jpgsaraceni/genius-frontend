import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * To access this provider in a component:
 * @example
 * import { useContext } from 'react';
 * import TimerContext from '../../providers/TimerProvider';
 *
 * const { passToNextRound, startTimer } = useContext(timerContext);
 */
const TimerContext = createContext({});

export const TimerProvider = ({ children }) => {
  const [roundTime, setRoundTime] = useState(5 * 1000);
  const [timeRemaining, setTimeRemaining] = useState(roundTime);

  function passToNextRound() {
    setRoundTime(roundTime * 0.9);
  };

  function startTimer(callback) {
    setInterval(() => {
      setTimeRemaining(timeRemaining - 100)
    }, 100);
    return setTimeout(() => callback(), roundTime);
  };

  function pauseTimer() {
    clearInterval();
    clearTimeout();
  };

  return (
    <TimerContext.Provider
      value={{
        passToNextRound,
        startTimer,
        pauseTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

TimerProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TimerContext;