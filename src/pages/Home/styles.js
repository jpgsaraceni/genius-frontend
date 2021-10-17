import styled from 'styled-components';

import container from '../../assets/images/home-container.png';
import genius from '../../assets/images/genius-text.png'
import portal from '../../assets/images/genius-portal.png'



export const Container = styled.div`
    width: 1000px;
    height:550px;
    background-image: url(${container});
    background-size: cover;

    padding-top: 18px;

`;

export const Left = styled.div`
    width: 550px;
    height:300px;

    margin-top: 60px;
`;

export const GeniusLogo = styled.figure`
    width: 550px;
    height:100px;

    margin: 0 0;
    background-image: url(${genius});
    background-size: cover;
    background-position: center center;

    position: absolute;
`;
export const GeniusPortal = styled.figure`
    width: 312px;
    height: 248px;

    background-image: url(${portal});
    background-size: cover;
    background-position: center center;
`;

export const Genius = styled.section`


`

export const Right = styled.div`
    width: 300px;
    height:400px;
`;