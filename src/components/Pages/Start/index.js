import React from 'react';
import { Title, Information, CustomersInfo, Customer } from '../styles';
import CustomersProgress from '../../Animations/progressBar';

const Start = () => {
    
    return (
        <div>
            <Title>Teckna elavtal på 2 minuter!</Title>
            <Information>Fyll i ditt postnummer och se din beräknade månadskostnad. Är du redan kund hos oss kan du logga in på Mina Sidor för att teckna nytt, förlänga eller flytta ditt elavtal.</Information>
            <Customer>
                <CustomersInfo>Visste du att Borås Elhandel har 93% nöjda kunder? Bli en nöjd kund du också.</CustomersInfo>
                <CustomersProgress />
            </Customer>
        </div>
    );
};
export default Start;
