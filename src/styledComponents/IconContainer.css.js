import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .project-link {
    flex-basis: 50%;
    text-decoration: none;
    color: #f5bf42;
    text-align: center;
    &:hover {
      background-color: rgba(31, 200, 240, .1);
    }
    img {
      width: 100%;
    }
  }
`;

export default IconContainer;