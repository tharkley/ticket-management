import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setMessage(data.message)
      })
      .catch((err) => {
        setError(err.message)
        setMessage('Unable to reach the backend.')
      })
  }, [])

  return (
    <main className="app-shell">
      <h1>React + C#</h1>
      <p className="subtitle">This frontend is calling the ASP.NET Core backend.</p>

      <section className="card">
        <span className="label">API response</span>
        <strong>{message}</strong>
        {error && <p className="error">{error}</p>}
      </section>
    </main>
  )
}

export default App
