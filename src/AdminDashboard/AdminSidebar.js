import React from "react";
import { NavLink } from "react-router-dom";
import adminStyles from "./adminstyles.module.css";
const AdminSidebar = () => {
  return (
    <div className={adminStyles.adminsidebar}>
      <ul>
        <li>
          <NavLink to="">Add Treatment</NavLink>
        </li>
        <li>
          <NavLink to="deletetreatment">Edit & Delete Treatment</NavLink>
        </li>
        <li>
          <NavLink to="addoffer">Add Offers</NavLink>
        </li>
        <li>
          <NavLink to="deleteoffer">Edit & Delete Offers</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
