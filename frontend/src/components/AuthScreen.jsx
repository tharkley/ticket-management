import { useState } from 'react';
import { useAuth } from '../AuthContext';
import Login from './Login';
import Dashboard from './Dashboard/Dashboard';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import './Login.css';

const AuthScreen = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [view, setView] = useState('login');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="login">
      <section className="card">
        {!isLoggedIn ? (
          <>
            {view === 'login' && (
              <Login
                onLoginSubmit={handleLoginSubmit}
                onSignUp={() => setView('signup')}
                onResetPassword={() => setView('reset')}
              />
            )}
            {view === 'signup' && <SignUp onBackToLogin={() => setView('login')} />}
            {view === 'reset' && <ResetPassword onBackToLogin={() => setView('login')} />}
          </>
        ) : (
          <Dashboard />
        )}
      </section>
    </div>
  );
};

export default AuthScreen;
