import React from 'react';
import { Title, Information } from '../styles';

const Elpris = () => {
    return (
        <div>
            <Title small={ true }>Din uppskattade månadskostnad</Title>
            <Information>För att kunna räkna ut din månadskostnad behöver vi veta din ungefärliga årsanvändning. Välj bostadstyp och fyll din användning nedan.</Information>
        </div>
    );
};
export default Elpris;
