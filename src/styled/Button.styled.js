import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  margin-right: 16px;
  ${props => {
    switch (props.btnType) {
      case 'delete':
        return css`
          &:hover {
            background: #dc8181;
          }
        `;
      case 'change':
        return css`
          &:hover {
            background: var(--title-color);
          }
        `;
      default:
        break;
    }
  }}
`;

export default ButtonStyled;
