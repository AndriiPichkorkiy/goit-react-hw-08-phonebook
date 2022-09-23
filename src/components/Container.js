const { default: styled } = require('styled-components');

const Section = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  padding: 0 2rem;
  height: 75vh;
  /* width: 17.5rem; */

  background-color: #aaaaaaaa;
  margin: 0 auto;
  box-shadow: #aaaaaa 0px 0px 16px 16px;
`;

export { Container, Section };
