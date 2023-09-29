import React  from "react";
import {Link} from "react-router-dom";
 const Navbar=()=>{
    return(
      <>
        <ul>
         <li>
         <Link to="/">BestSeller</Link>
         </li>
         <li>
         <Link to="/count">Count</Link>
         </li>
        </ul>
      </>
    );
 };
 export default Navbar;