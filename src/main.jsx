import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import "./QrCode.css";
import {QrCode } from "./QrCode.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <QrCode></QrCode>
  </React.StrictMode>,
)
