import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Operation from './Pract.jsx'
// import Sai from './Saini.jsx';
import ChangeState from './Usestate'
import Hide from './Toggle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Operation/> */}
    <ChangeState />
    <Hide/>
    {/* <Sai /> */}
  </StrictMode>,
)
