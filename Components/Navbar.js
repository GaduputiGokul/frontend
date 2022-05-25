import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-light bg-light navClass">
      <nav>
        <NavLink to="/" className="bg-success p-2 text-dark bg-opacity-25 nav-class">Home</NavLink>
        <NavLink to="/addcourses" className="bg-success p-2 text-dark bg-opacity-25 nav-class">Add Courses</NavLink>
        <NavLink to="/allcourses" className="bg-success p-2 text-dark bg-opacity-25 nav-class" >All Courses</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;