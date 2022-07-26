const { default: styled } = require('styled-components');

const Container = styled.div`
  /* position: absolute; */
  /* transform: translate(-50%, 0);
  top: 0;
  left: 50%; */

  display: flex;
  justify-content: space-around;
  padding: 0 2rem;
  height: 95vh;
  /* min-width: 18rem; */
  width: 35rem;

  background-color: #aaaaaaaa;
  margin: 0 auto;
  box-shadow: #aaaaaa 0px 0px 16px 16px;
`;

export default Container;
