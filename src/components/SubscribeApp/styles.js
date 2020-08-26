import styled, { css } from 'styled-components';

const locationText = css`
    display: inline;
    font-size: 26px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
`;

export const Main = styled.div`
    background-color: #ffffff;
    display: flex;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
`;

export const Subscribe = styled.div`
    width: 50%;
    margin-bottom: 126px;
`;

export const SubscribeWrapper = styled.div`
    margin: 0 40px;
`;

export const Nav = styled.nav`
    width: 100%;
`;

export const NavContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const NavItem = styled.li`
    text-align: center;
    width: 25%;
    color: #a6a6a6;
    font-family: Avenir;
    font-size: 13px;
    // font-weight: 900;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    text-transform: uppercase;
`;

/* Start - Location */
export const Location = styled.div`
    margin-bottom: 42px;
`;

export const LocationTitle = styled.h2`
    color: #595b56;
    font-size: 18px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
`;
export const LocationContainer = styled.div`
    text-align: center;
`;

export const Text = styled.p`
    ${locationText}
    color: #595b56;
`;

export const City = styled.div`
    ${locationText}
    color: #57a3af;
    cursor: pointer;
    text-decoration: underline;
    text-transform: capitalize;
    transition-duration: 0.6s;
    position: relative;

    &:hover {
        color: #4a939e;
    }
`;

export const ChangeCity = styled.div`
    border-radius: 50% 50% 50% 0;
    background-color: #57a3af;
    box-shadow: -2px 3px 8px #888;
    cursor: auto;
    display: ${props => props.showInput ? 'block' : 'none'};
    height: 120px;
    left: 50%;
    position: absolute;
    top: -150px;
    transform: translateX(-50%) rotate(-45deg);
    width: 120px;
`;

export const CityInput = styled.input`
    border: none;
    background: transparent;
    border-bottom: 2px solid #d6d6d6;
    color: #d6d6d6;
    font-family: Avenir;
    font-size: 16px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    left: 50%;
    position: absolute;
    text-align: center;
    text-transform: capitalize;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 75%;
`;

export const Instructions = styled.p`
    color: #595b56;
    font-size: 13px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
`;

export const Button = styled.button`
    background-color: #57a3af;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    font-family: Avenir;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    height: 50px;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    transition-duration: 0.6s;
    width: 100%;  

    &:hover {
        background-color: #4a939e;
    }
`;