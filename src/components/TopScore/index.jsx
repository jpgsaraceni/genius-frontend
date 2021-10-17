import React from 'react';

import { Container } from './styles';

/**
 * Rendered on Game page.
 * @returns {JSX.Element} 3 best scores with names, rounds and times.
 */
function TopScore() {
  return (
    <Container>
      <fieldset>
        <legend>Top 3</legend>
        João <br />
        João <br />
        Luana
      </fieldset>
    </Container>
  );
}

export default TopScore;