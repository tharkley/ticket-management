import { useState } from 'react';
import { useAuth } from '../AuthContext';
import SocialIcons from './Icons/SocialIcons';
import Dashboard from './Dashboard/Dashboard';
import SignUp from './SignUp';
import './Login.css';

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login">
      {!isLoggedIn ? (
        <section className="card">
          {isSignUp ? (
            <SignUp onBackToLogin={() => setIsSignUp(false)} />
          ) : (
            <>
              <h1>Welcome back</h1>
              <label htmlFor="username">Username</label>
              <input id="username" placeholder="Enter your username" type="username"></input>
              <label htmlFor="password">Password</label>
              <input id="password" placeholder="Enter your password" type="password"></input>
              <span className="link">Forget Password?</span>
              <button type="button" onClick={() => setIsLoggedIn(true)} className="login-button">
                Login
              </button>
              <div className="divider">
                <span>Or continue with</span>
              </div>
              <SocialIcons />
              <p>
                Don't have an account? {' '}
                <span className="link" onClick={() => setIsSignUp(true)}>
                  Sign up
                </span>
              </p>
            </>
          )}
        </section>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Login;
