import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Sai from './Saini.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Sai /> */}
  </StrictMode>,
)
