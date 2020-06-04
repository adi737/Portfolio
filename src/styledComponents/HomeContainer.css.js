import styled from 'styled-components';
import { device } from 'breakpoints';

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  @media ${device.M} {
    width:75%;
  }
  @media ${device.L} {
    width: 65%;
  }
  .pic {
    width: 100%;
    margin-bottom: 40px;
  }
  p {
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 1px;
    @media ${device.S} {
      font-size: 1.15rem;
    }
    @media ${device.M} {
      font-size: 1.3rem;
    }
    @media ${device.XXL} {
      font-size: 1.4rem;
    }
  }
`;

export default HomeContainer;