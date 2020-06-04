import styled, { css } from 'styled-components';

const translateRight = css`
  translateX(40px);
`

const ThemeButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  text-align: center;
  p {
    margin: 0;
    color: ${props => props.theme.isLightTheme ? 'black' : 'white'};
  }
  .theme-button {
    position: relative;
    border: ${props => props.theme.isLightTheme ? '1px solid' : '1px solid white'};;
    background-color: transparent;
    border-radius: 20%;
    padding: 0;
    width: 70px;
    height: 30px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    .circle {
      position: absolute;
      left: 0;
      top: 0;
      height: 28px;
      width: 28px;
      background-color: ${props => props.theme.isLightTheme ? 'black' : 'white'};
      border-radius: 50%;
      transition: .5s;
      transform: ${props => props.theme.isLightTheme ? '' : translateRight};
    }
  }
`

export default ThemeButton;