import NavBar from "components/NavBar";
import UserMenu from "components/UserMenu/UserMenu";
import {  Outlet } from "react-router-dom";
import { Suspense } from 'react';
import Loader from "components/Loader/Loader";

const SharedLayout = () => {

    return (
        <>
            <header>
                <NavBar />
                <UserMenu />
            </header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>

    );
}

export default SharedLayout;