import { StyledLink, StyledNav } from './NavBar';
import { useSelector } from "react-redux";
import { isAuth } from "redux/auth/auth-selectors";



const NavBar = () => {
  const isLoggedIn = useSelector(isAuth);

  return (
    <>
      <StyledNav style={{ height: '64px' }}>
        <StyledLink to="/home">Home</StyledLink>
        {isLoggedIn && <StyledLink to="contacts">Contacts</StyledLink>}
        {!isLoggedIn && <StyledLink to="sign-in">sign-in</StyledLink>}
        {!isLoggedIn && <StyledLink to="sign-up">sign-up</StyledLink>}
      </StyledNav>

    </>
  );
}

export default NavBar;