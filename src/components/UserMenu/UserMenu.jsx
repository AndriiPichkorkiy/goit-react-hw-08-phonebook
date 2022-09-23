import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../redux/auth/auth-operations';

import { getName } from "redux/auth/auth-selectors";
import { UserMenuStyled, SpanStyled } from "./UserMenu.styled";

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getName)

    const onLogOut = () => {
        dispatch(logout());
    }

    const markupWellcome = name ? `wellcome ${name}` : "pls sign in"
    return (
        <UserMenuStyled>
            <SpanStyled>{markupWellcome}</SpanStyled>
            {name && <button onClick={onLogOut}>LogOut</button>}
        </UserMenuStyled >

    );
}

export default UserMenu;