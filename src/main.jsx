import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TimeAgo from 'javascript-time-ago'

import id from 'javascript-time-ago/locale/id.json'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(id)
TimeAgo.addLocale(en)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
