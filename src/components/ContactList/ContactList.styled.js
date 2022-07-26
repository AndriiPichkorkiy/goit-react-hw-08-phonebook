const { default: styled } = require('styled-components');

const ContactListUl = styled.ul`
  width: 24rem;
  list-style: none;
  padding-left: 0;
  & > li {
    padding: 0.4rem;
    display: flex;
    justify-content: space-between;

    transition-duration: 750ms;
      transition-property: background-color;

    & > button {
      margin-top: 0;
    }

    &:hover {
      transition-duration: 250ms;
      background-color: #5D5179;
    }

    &> span {
      width: 33%;
    }
  }

  
`;

export default ContactListUl;
