import { Routes, Route,NavLink } from "react-router-dom";
import Adduser from "./Adduser";
import Api from "./api";
import "./Api.css";

export default function Userlist() {
  return (
    <>
      {/* <h1>Make Routes and Pages for Add User and User List</h1> */}
    <div id="btn">
    <NavLink to='/'>Home</NavLink>{"   "}
    <NavLink to='/add'>Add User</NavLink>
    </div>
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/add" element={<Adduser />} />
      </Routes>
    </>
  );
}
