import { useAuth } from '../AuthContext'
import SocialIcons from './Icons/SocialIcons'
import Dashboard from './Dashboard/Dashboard'
import './Login.css'

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth()

  return (
    <div className="login">
      {!isLoggedIn ? (
        <section className="card">
          <h1>Welcome back</h1>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            placeholder="Enter your username"
            type="username"
          ></input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="Enter your password"
            type="password"
          ></input>
          <a href="/forgot-password">Forget Password?</a>
          <button
            type="button"
            onClick={() => setIsLoggedIn(true)}
            className="login-button"
          >
            Login
          </button>
          <div className="divider">
            <span>Or continue with</span>
          </div>
          <SocialIcons />
          <p>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </section>
      ) : (
        <Dashboard />
      )}
    </div>
  )
}

export default Login
