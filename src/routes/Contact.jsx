import { Link, NavLink, Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
      <div>
        <NavLink to="mobno">Mobile</NavLink>{" "}
        <NavLink to="address">Address</NavLink>
        <Outlet />   {/* if we don't write this na thennested router data will not be visible  */}
      </div>
    </>
  );
}

export default Contact;
