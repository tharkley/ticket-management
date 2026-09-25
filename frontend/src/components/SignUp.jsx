import './SignUp.css';

const SignUp = ({ onBackToLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onBackToLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" className="signup-button">
        Sign Up
      </button>
      <p className="signin-section">
        Already have an account?{' '}
        <button type="button" className="link" onClick={onBackToLogin}>
          Sign in
        </button>
      </p>
    </form>
  );
};

export default SignUp;
