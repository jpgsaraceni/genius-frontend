import React from 'react';

import { Container } from './styles';

/**
 * Home page.
 * @returns {JSX.Element} Game name and buttons linking to Game, Settings and Help.
 */
function Home() {
  return (
    <Container>
      <h1>Genius</h1>
      <button>Play button - opens Game page</button>
      <button>Settings button - opens Settings page</button>
      <button>Help button - opens Help page</button>
    </Container>
  );
}

export default Home;