import styled from 'styled-components';

import container from '../../assets/images/home-container.svg';

export const Container = styled.div`
    width: 1000px;
    height:550px;
    background-image: url(${container});
    background-size: cover;

    padding-top: 18px;

`;

export const Left = styled.div`
    width: 400px;
    height:400px;
`;

export const Right = styled.div`
    width: 400px;
    height:400px;
`;