import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.png';

export default createGlobalStyle`
    
    body{
        background-image: url(${background});
        background-size: cover;

        display: flex;
        justify-content: center;
        
    }    

    .flex{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
}
`;