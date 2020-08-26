import styled from 'styled-components';

export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Logo = styled.img`
    margin: 16px auto 21px;
`;

export const ProgressBar = styled.progress`
    border-radius: 5px;
    height: 6px;
    margin-bottom: 12px;
    width: 100%;

    &[value]::-webkit-progress-bar {
        background-color: #d6d6d6;
        border-radius: 5px;
    }
    
    &[value]::-webkit-progress-value {
        background-color: #57a3af;
        border-radius: 5px;
        transition: width 1.5s ease-in-out;
    }
`;
