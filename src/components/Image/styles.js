import styled from 'styled-components';
import rightImage from '../images/right-image.jpg';

export const ImageContainer = styled.div`
    background-image: url(${rightImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center bottom;
    width: 50%;
`;
