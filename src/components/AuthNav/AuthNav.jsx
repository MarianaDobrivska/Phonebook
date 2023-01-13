import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register">Sign up</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </nav>
  );
};
