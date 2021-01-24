import React from 'react';
import logoImg from '~/assets/to-up2.png';
import { AnimationContainer } from './styles';



const LazyLoading: React.FC = () => {
    return (
        <AnimationContainer>
            <img src={logoImg} alt="To Up" />
        </AnimationContainer>
    );
};

export default LazyLoading;
