import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Operation from './Pract.jsx'
// import Sai from './Saini.jsx';
// import ChangeState from './Usestate'
// import Hide from './Toggle'
// import Parent from './props/Parent'
// import ClearButton from './practice/Clearbutton'
// import Loop from './practice/Loop'
// import Useeffect from './hook/Useeffect'
// import ParentToggle from './hook/ParentToggle'
// import Bootstrap from './style/Bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Useref from './hook/Useref'
// import Call from './practice/CallFunctionToAnotherCOmponent'
// import UpdatobjectInState from './practice/Updateobjectinstate'
// import Fragment from './practice/Fragment'
// import Contextapi from './contextApi/Contextapi'

// import Nav from './routes/Nav'
import { BrowserRouter } from 'react-router'
// import Api from './api/api'
import Userlist from './api/Userlist'

// import Style from './style/Style'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Operation/> */}
    {/* <ChangeState /> */}
    {/* <Hide/> */}
    {/* <Parent /> */}
    {/* <Sai /> */}
    {/* <ClearButton/> */}
    {/* <Loop/> */}
    {/* <Useeffect/> */}
    {/* <ParentToggle/> */}
    {/* <Style/> */}
    {/* <Bootstrap /> */}
    {/* <Useref/> */}
    {/* <Call/> */}
    {/* <UpdatobjectInState/> */}
    {/* <Fragment/> */}
    {/* <Contextapi/> */}

  {/* <BrowserRouter>
  <Nav/>
  </BrowserRouter> */}
  {/* <Api/> */}
<BrowserRouter>
    <Userlist />
  </BrowserRouter>

  </StrictMode>,
)
