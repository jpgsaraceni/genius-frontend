import React from 'react';

import { Container } from './styles';

/**
 * Game page.
 * @returns {JSX.Element} Simon, score, timer, high score, difficulty gauge and control bar.
 */
function Game() {
  return (
    <Container>
      <h1>The Game</h1>
      <header>

        <fieldset>
          <legend>Your score</legend>
          0
        </fieldset>

        <fieldset>
          <legend>Timer</legend>
          00:00
        </fieldset>

        <fieldset>
          <legend>Top 3</legend>
          João <br />
          João <br />
          Luana
        </fieldset>
      </header>

      <main>
        SimonWheel component
      </main>

      <aside>difficulty gauge component</aside>

      <footer>Control bar component</footer>
    </Container>
  );
}

export default Game;