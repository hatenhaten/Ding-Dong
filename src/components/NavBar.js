import React from "react";
import { Link } from "react-router-dom";

//styles
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="StyledNavWrap">
      <ul className="StyledNav">
        <li>
          <Link className="navLink" to="/">Home</Link>
        </li>
        <li>
          <Link className="navLink" to="/Id">Your Details</Link>
        </li>
        <li>
          <Link className="navLink" to="/Create">Create Tennant</Link>
        </li>
        <li>
          <Link className="navLink" to="/tennant">Find Tennant</Link>
        </li>
        <li>
          <Link className="navLink" to="/SendDingDong">Send Ding Dong</Link>
        </li>
        <li>
          <Link className="navLink" to="/BuildingDetails">Building Details</Link>
        </li>
        <li>
          <Link className="navLink" to="/CollectedParcel">Parcel Collected</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;