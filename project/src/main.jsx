import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/Css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-blue-100 dark:bg-gray-900 dark:text-white h-[1100px] w-screen">
    <App />
    </div>
  </React.StrictMode>,
)
