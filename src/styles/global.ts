import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg3 from '~/assets/bg4.png';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, html {


      zoom: .94;
      .modal-backdrop {
    zoom: 3 !important;

  #___reactour {
   div {
    svg {
      zoom: 0.5 !important;
    }
   }
  }
   }

    background: rgba(242, 243, 245, 0.9);
    background-image: url(${bg3});
    background-size: 70%;
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 200% ;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
    overscroll-behavior-x: none;
    font-family: 'Fira Sans', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    .modal-backdrop {
    zoom: 2 !important;
  }
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


  body, input, button {
    font-family: Roboto, sans-serif !important;
    font-size: 16px;
    outline: 0 !important;
  }


  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
