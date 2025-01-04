import React from "react";
import {
   UserCircleIcon,
   MagnifyingGlassCircleIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
const Navbar = () => {
   return (
      <div className="navbar-container d-flex justify-content-between align-items-center">
         <Link to="/" className="text-decoration-none navbar-txt">
            <h2 className="logo ms-3 mt-2">ETEC CENTER</h2>
         </Link>
         <ul className="menu mt-3 d-flex list-unstyled">
            <li>
               <Link className="text-decoration-none navbar-txt" to="/">
                  Home
               </Link>
            </li>
            <li>
               <Link className="text-decoration-none navbar-txt" to="/add-expense">
                  Add Expenses
               </Link>
            </li>
            <li>
               <Link className="text-decoration-none navbar-txt" to="/show-expense">
                  Expenses
               </Link>
            </li>
         </ul>
         <div className="user d-flex gap-2">
            <UserCircleIcon width={"30px"} className="text-light" />
            <MagnifyingGlassCircleIcon width={"30px"} className="text-light" />
         </div>
      </div>
   );
};

export default Navbar;
