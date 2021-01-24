import React from 'react';
import RingLoader from "react-spinners/RingLoader";
import { Container } from './styles';



const Loading: React.FC = () => {
    return (
        <Container>
            <RingLoader color="#007bff" size={80} />
        </Container>
    );
};

export default Loading;
