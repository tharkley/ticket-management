import SocialIcons from './Icons/SocialIcons';
import './Login.css';

const Login = ({ onLoginSubmit, onSignUp, onResetPassword }) => {
  return (
    <form onSubmit={onLoginSubmit}>
      <h1>Welcome back</h1>
      <label htmlFor="username">Username</label>
      <input id="username" placeholder="Enter your username" type="text"></input>
      <label htmlFor="password">Password</label>
      <input id="password" placeholder="Enter your password" type="password"></input>
      <button type="button" className="link" onClick={onResetPassword}>
        Forgot Password?
      </button>
      <button type="submit" className="login-button">
        Login
      </button>
      <div className="divider">
        <span>Or continue with</span>
      </div>
      <SocialIcons />
      <p className="signup-section">
        Don&apos;t have an account?{' '}
        <button type="button" className="link" onClick={onSignUp}>
          Sign up
        </button>
      </p>
    </form>
  );
};

export default Login;
