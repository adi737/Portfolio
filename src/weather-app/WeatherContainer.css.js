import styled from 'styled-components';
import { device } from 'breakpoints';

const colors = {
  primary: '#11998e',
  secondary: '#38ef7d',
  gray: '#9b9b9b',
}

const WeatherContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 60%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  @media ${device.L} {
    width: 45%;
    }
    .weather-input {
      font-family: inherit;
      width: 100%;
      border: 0;
      border-bottom: 2px solid ${colors.gray};
      outline: 0;
      font-size: 1.3rem;
      color: ${props => props.theme.isLightTheme ? 'black' : 'white'};
      padding: 7px 0;
      background: transparent;
      transition: border-color 0.2s;
      &::placeholder {
        color: transparent;
      }
      &:placeholder-shown ~ .weather-label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
      }
    }

    .weather-label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${colors.gray};
    }

    .weather-input:focus {
      ~ .weather-label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: ${colors.primary};
        font-weight:700;    
      }
      padding-bottom: 6px;  
      font-weight: 700;
      border-width: 3px;
      border-image: linear-gradient(to right, ${colors.primary},${colors.secondary});
      border-image-slice: 1;
    }

    .weather {
      display: grid;
      justify-items: center;
      @media ${device.S} {
        grid: "name icon" auto
              "description temp" auto
              / auto auto;
        align-items: center;
      }
      &__name {
        margin: 20% 0 0;
        font-size: 1.2rem;
        @media ${device.S} {
          grid-area: name;
          margin: 0 0 -20px;
        }
      }
      &__description {
        margin: 0;
        @media ${device.S} {
          grid-area: description;
          margin-top: -20px;
        }
        @media ${device.M} {
          margin-top: -35px;
        }
        @media ${device.L} {
          margin-top: -10px;
        }
        @media ${device.XL} {
          margin-top: -30px;
        }
        @media ${device.XXL} {
          margin-top: -40px;
        }
      }
      &__img {
        width: 50%;
        @media ${device.S} {
          grid-area: icon;
          width: 45%;
          margin-bottom: -20px;
        }
        @media ${device.L} {
          width: 33%;
        }
      }
      &__temp {
        margin: 0;
        @media ${device.S} {
          grid-area: temp;
        }
      }
    }
`

export default WeatherContainer;