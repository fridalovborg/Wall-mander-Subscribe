import React from 'react';
import { NotificationContainer, NotificationItem, ImageContainer, Image, Title, Text } from './styles';
import flowerImg from '../../../images/flowers-1.jpg';
import flowerImgSecond from '../../../images/flowers-2.jpg';

const Notifications = () => {
    
    return (
        <NotificationContainer>
            <NotificationItem>
                <ImageContainer>
                    <Image src={ flowerImg } alt="Flowers" />
                </ImageContainer>
                <Title>Schysst elhandel</Title>
                <Text>Som elhandelsbolag har vi ett stort ansvar i att förse vårt samhälle med energi.</Text>
            </NotificationItem>
            <NotificationItem>
                <ImageContainer>
                    <Image src={ flowerImgSecond } alt="Flowers" />
                </ImageContainer>
                <Title>Fast eller rörligt pris?</Title>
                <Text>Som elhandelsbolag har vi ett stort ansvar i att förse vårt samhälle med energi.</Text>
            </NotificationItem>
        </NotificationContainer>
    );
};
export default Notifications;
