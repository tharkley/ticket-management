import './SignUp.css';

const SignUp = ({ onBackToLogin }) => {
  return (
    <>
      <h1>Create your account</h1>
      <span>Sign up and get started with your support account today.</span>
      <label htmlFor="fullName">Full Name</label>
      <input id="fullName" placeholder="Enter your full name" type="text"></input>
      <label htmlFor="email">Email Address</label>
      <input id="email" placeholder="Enter your email address" type="email"></input>
      <label htmlFor="password">Password</label>
      <input id="password" placeholder="Create a password" type="password"></input>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input id="confirmPassword" placeholder="Confirm your password" type="password"></input>
      <button type="button" onClick={onBackToLogin} className="signup-button">
        Sign Up
      </button>
      <p>
        Already have an account?{' '}
        <span className="link" onClick={onBackToLogin}>
          Sign in
        </span>
      </p>
    </>
  );
};

export default SignUp;
