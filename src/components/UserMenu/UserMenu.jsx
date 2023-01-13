import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import { getUsername } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  return (
    <div>
      <span>Welcome, {name}!</span>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Log out
      </button>
    </div>
  );
};
