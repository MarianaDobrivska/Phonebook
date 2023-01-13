import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const Header = () => {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      <Navigation />
      {isLoggedInUser ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
