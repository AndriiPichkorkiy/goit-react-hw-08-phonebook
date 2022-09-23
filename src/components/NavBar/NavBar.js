import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding-right: 16px;
  color: black;

  &.active {
    color: orange;
  }
`;

export const StyledNav = styled('nav')`
  display: inline-block;
  padding: 8px;
  color: black;
`;
