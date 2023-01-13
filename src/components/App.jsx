import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignUpPage } from 'pages/Registration/RegisterPage';
import { LogInPage } from 'pages/LogIn/LogInPage';
import { getIsLoggedIn, getIsFetchingCurrent } from 'redux/auth/authSelectors';
import { PhoneBookPage } from 'pages/Contacts/PhonebookPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { getCurrentUser } from 'service/connectionsAPI';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route path="contacts" element={<PhoneBookPage />} />
      </Route>
    </Routes>
  );
};
