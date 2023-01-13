import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { SignUpPage } from 'pages/Registration/RegisterPage';
import { LogInPage } from 'pages/LogIn/LogInPage';
import { getIsFetchingCurrent } from 'redux/auth/authSelectors';
import { PhoneBookPage } from 'pages/Contacts/PhonebookPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { getCurrentUser } from 'service/connectionsAPI';

// const SignUpPage = lazy(() => import('../pages/Registration/RegisterPage'));
// const LogInPage = lazy(() => import('../pages/LogIn/LogInPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PublicRoute component={<HomePage />} />} />
        <Route
          path="login"
          element={<PublicRoute restricted={true} component={<LogInPage />} />}
        />
        <Route
          path="register"
          element={<PublicRoute restricted={true} component={<SignUpPage />} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={<PhoneBookPage />} />}
        />
      </Route>
    </Routes>
  );
};
