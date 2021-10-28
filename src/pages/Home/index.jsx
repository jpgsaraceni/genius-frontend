import React from 'react';

import particle from '../../assets/images/particle.png'
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
         <S.ParticleGroup>
           <S.ParticleElement className="one" src={particle}/>
           <S.ParticleElement className="two" src={particle}/>
           <S.ParticleElement className="three" src={particle}/>
           <S.ParticleElement className="four" src={particle}/>
           <S.ParticleElement className="five" src={particle}/>
           <S.ParticleElement className="six" src={particle}/>
           <S.ParticleElement className="seven" src={particle}/>
           <S.ParticleElement className="eight" src={particle}/>
           <S.ParticleElement className="nine" src={particle}/>
           <S.ParticleElement className="ten" src={particle}/>

         </S.ParticleGroup>
         <S.GeniusPortal></S.GeniusPortal>
      </S.Left>
      <S.Right></S.Right>
    </S.Container>
  );
}

export default Home;