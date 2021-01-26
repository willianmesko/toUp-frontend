import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';




interface AvatarProps {
    height?: string;
    width?: string;

}


const Avatar: React.FC<AvatarProps> = ({ height, width, ...rest }) => (
    <Container type="button" height={height} width={width} {...rest}>
        <img src="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/136055153_3844327295618506_1204292927982679153_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=2Zrm17vwFiEAX_y4fmK&_nc_oc=AQkpNsTGhT1ZlQx-KW6ZWvjesRMlQoy-4KnXPb2GI0l98Jcv_7UjlseNkY_asRM-Q34&_nc_ht=scontent.faly3-1.fna&oh=37be2f86b005a82f15994cc236f334f8&oe=6022AD14" alt="" />
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="svgloading"
        >
            <circle cx="50" cy="50" r="40" />
        </svg>

    </Container>
);

export default Avatar;
