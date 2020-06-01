import styled from 'styled-components';

export const Cards = styled.div`
  max-width: 1366px;
  margin: 50px auto;
  width: calc(100% - 2em);
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  grid-template-areas:
    'a a b b'
    'a a c c';

  .card {
    width: 100%;
    position: relative;
    transition: all 0.5s ease;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    display: flex;
  justify-content: center;

    border-radius: 10px;

    background: linear-gradient(
    to top,
    rgba(42, 159, 255, 0.2) 10%,
    rgb(248, 248, 255) 60%,
    rgba(255, 255, 255, 1) 100%
  ) !important;

  h1 {
    margin-top:30px;
    color:rgb(135,134,139);
    font-weight: 900;
    font-size:40px;
  }

      .card-content {
          margin-top:-50px;
          display: flex;
          flex-direction: column;
            justify-content: center;

            align-items: center;
            .small {
              margin-top: 60px;
              h2 {

              color:rgb(135,134,139);
              font-weight: 900;
              font-size:30px;
              }
              svg {
                margin-left: 20px;
              }
              }

      }

    &:last-child {
      margin-bottom: 0;

    }
    &:before {
      height: 0;
      content: '';
      display: block;
      padding-bottom: 47.36%;
      border-radius: 50%;
    }

    &.content {

      &:after {
        position: absolute;
        border-radius: 50%;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        content: '';

      }
    }
    &:nth-child(1) {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
    &:nth-child(4) {
      grid-area: d;
    }
    &-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-label {
      position: absolute;
      top: 0.45rem;
      left: 0.45rem;
      background: #089f8a;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 0.7em;
      color: white;
      padding: 0.5em;
    }
    &-title {


      color: #87868B;
      z-index: 5;
      font-size: 0.8em;
    }
    &.form {
      position: relative;
      &:before {
        background: linear-gradient(
          60deg,
          #f79533,
          #f37055,
          #ef4e7b,
          #a166ab,
          #5073b8,
          #1098ad,
          #07b39b,
          #6fba82
        );
      }
      &:after {
        position: absolute;
        top: 0.5em;
        left: 0.5em;
        width: calc(100% - 1em);
        height: calc(100% - 1em);
        content: '';
        background: #252833;
      }
      .form-title {
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 7vw;
        font-weight: 900;
        z-index: 5;
        text-transform: uppercase;
        background: linear-gradient(
          60deg,
          #f79533,
          #f37055,
          #ef4e7b,
          #a166ab,
          #5073b8,
          #1098ad,
          #07b39b,
          #6fba82
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        &:before {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          content: 'Sign Up';
          opacity: 0.5;
          filter: blur(10px);
          transition: all 0.25s ease;
          z-index: 2;
          background: linear-gradient(
            60deg,
            #f79533,
            #f37055,
            #ef4e7b,
            #a166ab,
            #5073b8,
            #1098ad,
            #07b39b,
            #6fba82
          );
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          transform: translateX(-50%) translateY(-50%);
        }
      }
    }
    &:nth-child(2) {
      .card-label {
        background: #ef4e7b;
      }
    }
    &:nth-child(3) {
      .card-label {
        background: #1098ad;
      }
    }
    &:hover {
      transform:
      box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
      -webkit-transform: translateX(-3px);
      transform: scale(1.02) translateX(-3px);
      border: 3px solid #000;

    }
  }
`;
