import React from 'react';

import { Container, Left, Right } from './styles';

/**
 * Home page.
 * @returns {JSX.Element} Game name and buttons linking to Game, Settings and Help.
 */
function Home() {
  return (
    <Container className="flex">
      <Left></Left>
      <Right></Right>
    </Container>
  );
}

export default Home;