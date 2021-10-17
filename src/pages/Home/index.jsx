import React from 'react';

import * as S from './styles';

/**
 * Home page.
 * @returns {JSX.Element} Game name and buttons linking to Game, Settings and Help.
 */
function Home() {
  return (
    <S.Container className="flex">
      <S.Left className="flex">
         <S.GeniusLogo></S.GeniusLogo>
         <S.GeniusPortal></S.GeniusPortal>
      </S.Left>
      <S.Right></S.Right>
    </S.Container>
  );
}

export default Home;