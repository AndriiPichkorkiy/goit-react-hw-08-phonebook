import styled from 'styled-components';
import { Form } from 'formik';

export const FormStyled = styled(Form)`
  padding: 2rem 2rem;

  max-width: 20rem;
  background-color: #aaaaaaaa;
  margin: 0 auto;
  box-shadow: #aaaaaa 0px 0px 16px 16px;
`;

export const InputGroup = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 3rem;
`;
