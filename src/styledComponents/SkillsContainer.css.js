import styled from 'styled-components';
import { device } from 'breakpoints';

const SkillsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  @media ${device.M} {
    width:75%;
  }
  @media ${device.L} {
    width: 65%;
  }
  .pic{
    width: 100%;
  }
  .pic2 {
    width: 30%;
  }
  .pic3 {
    margin-top: -7%;
    width:40%;
  }
  .pic4 {
    width: 30%;
  }
  p {
    margin-top: 40px;
    @media ${device.M} {
      font-size: 1.1rem;
    }
    @media ${device.L} {
      font-size: 1.2rem;
    }
  }
`;

export default SkillsContainer;