import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./Pagenotfound";
import MobileNo from "./Mobileno";
import Address from "./Address";
function Nav() {
  return (
    <>
      <nav style={{ marginBottom: "20px" }}>
        {/* <Link style={{ color: 'black', textDecoration: 'none' }} to="/home">Home</Link> */}
        <Link to="/home">Home</Link>{"  "}
        <Link to="/about">About</Link> {"  "}
        <Link to="/contact">Contact</Link>  {/*if we don't have page then write invalid route path in to */}
      </nav>

      <Routes>
        <Route path="/" element={<h1>Please press any button for infromation</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} >    {/* nested routes  */}
        <Route path='mobno' element={<MobileNo/>}/>
        <Route path='address' element={<Address/>}/>
        </Route>

        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default Nav;
