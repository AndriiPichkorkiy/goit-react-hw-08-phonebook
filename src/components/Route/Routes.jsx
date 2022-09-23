import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from "react-redux";
import { isAuth } from "redux/auth/auth-selectors";

// navigate("/profile", { replace: true });

// const PrivateRoute = ({children, ...routeProps}) => {
//     const isLoggedIn = useSelector(isAuth);

//     return (
//         <Route {...routeProps} >
//             {isLoggedIn ? children : <Redirect to="/login" />}
//         </Route>
//     )
// }

const PrivateRoute = () => {
    const isLoggedIn = useSelector(isAuth);

    if (!isLoggedIn) return <Navigate to="/sign-in" />
    else return <Outlet />
}

const PublicRoute = () => {
    const isLoggedIn = useSelector(isAuth);

    if (isLoggedIn) return <Navigate to="/contacts" />
    else return <Outlet />
}

export { PrivateRoute, PublicRoute };