import React from 'react';

import { Container } from './styles';

/**
 * Rendered on Game page.
 * @returns {JSX.Element} Four quarter-circle plus one central button.
 */
function SimonWheel() {
  return (
    <Container>
      <button>TopLeft component</button>
      <button>TopRight component</button>
      <button>BottomLeft component</button>
      <button>BottomRight component</button>
      <button>Center component</button>
    </Container>
  );
}

export default SimonWheel;