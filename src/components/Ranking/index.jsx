import React from 'react';

import { Container } from './styles';

/**
 * Rendered on Home page and on Game page after game ends.
 * @returns {JSX.Element} List with names, rounds completed and time.
 */
function Ranking() {
  return (
    <Container>
      <table>
        <th>Name</th>
        <tr>Luana</tr>

        <th>Rounds</th>
        <tr>100</tr>

        <th>Time</th>
        <tr>00:20</tr>
      </table>
    </Container>
  );
}

export default Ranking;
