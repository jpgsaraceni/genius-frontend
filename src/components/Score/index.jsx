import React from 'react';

import { Container } from './styles';

/**
 * Rendered on game page.
 * @returns {JSX.Element} How many rounds player has completed.
 */
function Score() {
  return (
    <Container>
      <fieldset>
        <legend>Your score</legend>
        0
      </fieldset>
    </Container>
  );
}

export default Score;