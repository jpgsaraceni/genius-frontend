import React from 'react';

import DifficultyGauge from '../../components/DifficultyGauge';
import SimonWheel from '../../components/SimonWheel';
import Score from '../../components/Score';
import TopScore from '../../components/TopScore';
import Timer from '../../components/Timer';
import ControlBar from '../../components/ControlBar';

import { Container } from './styles';

/**
 * Game page.
 * @returns {JSX.Element} Simon, score, timer, high score, difficulty gauge and control bar.
 */
function Game() {
  return (
    <Container>
      <Score />
      <Timer />
      <TopScore />
      <SimonWheel />
      <DifficultyGauge />
      <ControlBar />
    </Container>
  );
}

export default Game;