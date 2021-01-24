import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';




interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;

}


const Button: React.FC<ButtonProps> = ({ children, height, width, ...rest }) => (
  <Container type="button" height={height} width={width} {...rest}>
    {children}
  </Container>
);

export default Button;
