import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedInUser = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedInUser && <NavLink to="/contacts">Phonebook</NavLink>}
    </nav>
  );
};
