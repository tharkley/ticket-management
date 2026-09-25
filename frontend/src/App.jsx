import { useEffect, useState } from 'react'
import Login from './components/Login'
import { AuthProvider } from './AuthContext'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Failed to connect to the backend.'))
  }, [])

  return (
    <AuthProvider>
      <main className="app-shell">
        <Login></Login>
        <p className="message">{message}</p>
      </main>
    </AuthProvider>
  )
}

export default App
