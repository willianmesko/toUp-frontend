import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(
    to left,
    rgb(248,248,255) 10%
    rgb(255, 255, 255) 60%,
    rgba(255, 255, 255, 1) 100%
  ) !important;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
