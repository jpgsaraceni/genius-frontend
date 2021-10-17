import React from 'react';

import Box from '../../assets/images/difficulty-gauge-box.svg';

import { Container } from './styles';

/**
 * Rendered on Game page. Vertical bar that grows as the player completes rounds.
 * Represents time between flashes.
 * @returns {JSX.Element} Difficulty Gauge.
 */
function DifficultyGauge() {
  return (
    <Container>
      <img src={Box} alt="Vertical bar" />
    </Container>
  );
}

export default DifficultyGauge;