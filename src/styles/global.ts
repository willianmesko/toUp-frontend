import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, html {
    background: #F2F3F5;

    -webkit-font-smoothing: antialiased;
    overscroll-behavior-x: none;
    font-family: 'Fira Sans', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

  }
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: #dad7d7;
}
  }

  body, input, button {
    font-family: 'Roboto Slab', serif !important;
    font-size: 16px;
  }


  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
