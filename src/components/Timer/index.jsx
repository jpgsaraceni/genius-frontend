import React from 'react';

import { Container } from './styles';

/**
 * Rendered on Game page.
 * @returns {JSX.Element} Minutes and seconds since the game started.
 */
function Timer() {
  return (
    <Container>
      <fieldset>
        <legend>Timer</legend>
        00:00
      </fieldset>
    </Container>
  );
}

export default Timer;