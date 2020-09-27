import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .exercice-info-modal {
    text-align: center;
    margin-top: 10px;
    table {
      width: 100%;
    }
  }

  .exercice-video-modal {
    margin-top: 10px;
    text-align: center;
    align-content: center;
    justify-content: center;

    #player {
      border-radius: 6px;
      border: solid 1px #999;
      height: 40vh !important;
      width: 50vw !important;
      z-index: 10;

      iframe {
        z-index: 9;
        height: 30vh !important;
        width: 30vw !important;
      }
    }
  }

  .exercice-description-modal {
    margin-top: 10px;
    text-align: center;

    #note {
      height: 100px;
    }
  }
`;
