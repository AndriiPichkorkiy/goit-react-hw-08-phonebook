import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Routes, Route, Navigate } from 'react-router-dom';
import { current } from "redux/auth/auth-operations";
import { PrivateRoute, PublicRoute } from "./Route/Routes";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('pages/Home'));
const ContactsBook = lazy(() => import('pages/ContactsBook').then(module => ({
  default: module.ContactsBook
})));
const SignIn = lazy(() => import('pages/SignIn'));
const SignUp = lazy(() => import('pages/SignUp'));


export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current())
  }, [dispatch]);

  const showMessage = (msg) => {
    Notify.warning(msg)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="home"></Navigate>} />
          <Route path="home" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsBook showMessage={showMessage} />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
          <Route path="*" element={<span>ERROR</span>} />
        </Route>
      </Routes>

    </>
  );
  // }
};
