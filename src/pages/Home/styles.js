import styled from 'styled-components';

import container from '../../assets/images/home-container.png';
import genius from '../../assets/images/genius-text.png'
import portal from '../../assets/images/genius-portal.png'



export const Container = styled.div`
    width: 950px;
    height: 500px;
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

    animation: float 6s ease-in-out infinite;

    @keyframes float {
	0% {
		transform: translatey(0px) rotate(0deg);
	}
	50% {
		transform: translatey(5px) rotate(2deg);
	}

	100% {
		transform: translatey(0px) rotate(0deg);
	}
}


`;
export const GeniusPortal = styled.figure`
    width: 312px;
    height: 248px;

    background-image: url(${portal});
    background-size: cover;
    background-position: center center;
`;

export const ParticleGroup = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    animation: particle 6s ease-in-out infinite;
    
    @keyframes particle {
	0% {
		transform: translatey(0px) translatex(0px);
	}
	50% {
		transform: translatey(-10px) translatex(2px);
	}

	100% {
		transform: translatey(0px) translatex(0px);
	}
}
`
export const ParticleElement = styled.img`
    width: 10px;
    height: 10px;

    position: absolute;

    &.one{
        left: 200px;
        top: 100px;
    }

    &.two{
        left: 90px;
        top: 160px;
    }

    &.three{
        left: 50px;
        top: 105px;
    }

    &.four{
        width:5px;
        height: 5px;
        left: 78px;
        top: 125px;
    }

    &.five{
        width:5px;
        height: 5px;
        left: 180px;
        top: 125px;
    }
    &.six{
        width:10px;
        height: 10px;
        left: 130px;
        top: 185px;
    }

    &.seven{
        width:10px;
        height: 10px;
        left: 170px;
        top: 165px;
    }

    &.eight{
        width:5px;
        height: 5px;
        left: 170px;
        top: 195px;
    }

    &.nine{
        width:5px;
        height: 5px;
        left: 180px;
        top: 215px;
    }

    &.ten{
        width:10px;
        height: 10px;
        left: 130px;
        top: 140px;
    }
`
export const Genius = styled.section`


`

export const Right = styled.div`
    width: 300px;
    height:400px;
`;