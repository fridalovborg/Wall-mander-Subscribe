import styled, { css, keyframes } from 'styled-components';

const dash = keyframes`
    to {
        stroke-dashoffset: 7;
        stroke-dasharray: 100;
    }
`;

const centerItem = css`
    left: 50%;
    position: absolute;
    top: 50%;
`;

export const ProgressBarContainer = styled.div`
    height: 82px;
    position: relative;
`;

export const Number = styled.p`
    ${centerItem};
    color: #595b56;
    font-size: 18px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 0;
    transform: translate(-50%, -50%);
`;

export const Figure = styled.figure`
    ${centerItem};
    height: 82px;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(114deg);
    width: 82px;
`;

export const Circle = styled.circle`
    stroke-dashoffset: 100;
    stroke-dasharray: 100;
    animation: ${dash} 3s linear forwards;
`;
