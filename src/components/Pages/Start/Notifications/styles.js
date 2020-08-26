import styled from 'styled-components';

export const NotificationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 52px;
`;

export const NotificationItem = styled.div`
    width: calc(50% - 12px);
`;

export const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Title = styled.h2`
    color: #595b56;
    font-size: 26px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 14px 0 3px;
    text-align: center;
`;

export const Text = styled.p`
    color: #595b56;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    margin: 0;
    text-align: center;
`;
