import React from 'react';
import { HeaderContainer, Logo, ProgressBar } from './styles';
import logo from '../images/boras-elhandel-logo-2018.svg';

const Header = (props) => {
    const { progressValue } = props;

    return (
        <HeaderContainer>
            <Logo src={ logo } alt="Borås Elhandel" />
            <ProgressBar max="4" value={ progressValue } />
        </HeaderContainer>
    );
};
export default Header;
