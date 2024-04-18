import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@monorepo/tailwind/styles.css'

const target = document.getElementById('root')
if (!target) throw new Error('Root element not found')

ReactDOM.createRoot(target).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
