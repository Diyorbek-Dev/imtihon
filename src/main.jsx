import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app'
import "./style/style.css"

ReactDOM.createRoot(document.querySelector('.wrapper')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
