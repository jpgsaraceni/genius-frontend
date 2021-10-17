import React from 'react';

import { Container } from './styles';

/**
 * Rendered on Game page, after game ends. Calls API.
 * @returns {JSX.Element} Form to add name to ranking.
 */
function COMPONENT_NAME() {
  return (
    <Container>
      <h1>You finished XX rounds in XX:XX!</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <button type="submit">Save score</button>
      </form>

    </Container>
  );
}

export default COMPONENT_NAME;