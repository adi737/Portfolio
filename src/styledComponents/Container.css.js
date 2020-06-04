import styled from 'styled-components';
import background from 'img/background.png';
import darkBackground from 'img/background-navyblue.png';

const Container = styled.div`
  background-image: ${props => props.theme.isLightTheme ? `url(${background})` : `url(${darkBackground})`};
  color: ${props => props.theme.isLightTheme ? 'black' : 'white'};
  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    .header {
      margin-bottom: 10px;
    }
    .main {
      flex-grow: 1;
      position: relative;
    }
    .footer {
      justify-self: flex-end;
      background-color: #000;
      color: wheat;
    }
  }
`

export default Container;