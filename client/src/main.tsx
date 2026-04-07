import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{
      padding: '60px 20px',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 Final Mile Install</h1>
      <p style={{ fontSize: '1.4rem', opacity: 0.9 }}>
        Landing page deployed successfully!<br />
        Add your real UI components in <code>client/src/</code>
      </p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
