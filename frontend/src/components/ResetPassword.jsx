import './ResetPassword.css';

const ResetPassword = ({ onBackToLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onBackToLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" className="login-link" onClick={onBackToLogin}>
        Back to login
      </button>
      <h1>Reset your password</h1>
      <span>
        Enter your new password below. Make sure it's at least 8 characters long and includes a mix
        of letters, numbers, and symbols.
      </span>
      <label htmlFor="newPassword">New Password</label>
      <input id="newPassword" placeholder="Enter your new password" type="password"></input>
      <label htmlFor="confirmPassword">Confirm New Password</label>
      <input id="confirmPassword" placeholder="Confirm your new password" type="password"></input>
      <button type="submit" className="reset-button">
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
