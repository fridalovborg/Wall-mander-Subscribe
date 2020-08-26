import styled from 'styled-components';

export const Title = styled.h1`
    color: #595b56;
    font-size: ${props => props.small ? '26px' : '56px'};
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: ${props => props.small ? 'normal' : '1.18'};
    letter-spacing: normal;
    margin: ${props => props.small ? '36px auto 25px' : '26px auto 25px'};
    text-align: center;
    width: calc(100% - 32px);
`;

export const Information = styled.p`
    color: #484848;
    font-size: 22px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;
    margin-bottom: 33px;
    text-align: center;
`;

export const CustomersInfo = styled.p`
    color: #484848;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 23px;
    text-align: center;
`;

export const Customer = styled.div`
    margin: 30px 0;
`;
