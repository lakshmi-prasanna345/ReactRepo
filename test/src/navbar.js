import React from "react";
import { Link, Navigate } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const NavbarRoute = () => {
    let history=useNavigate();
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark text-white" >
                <ul className="navbar-nav d-flex">
                    <Link to="/images" className="mx-4 style-type-none nav-link" ><li>Images</li></Link>
                    <Link to="/data" className="mx-4 style-type-none nav-link" ><li>Employee</li></Link>
                    <Link to="/counter" className="mx-4 style-type-none nav-link" ><li>Counter</li></Link>
                    <Link to="/products_watch" className="mx-4 style-type-none nav-link" ><li>Products_watch</li></Link>
                    <Link to="/signup" className="mx-4 style-type-none nav-link" ><li>Signup</li></Link>
                    <Link to="/charts" className="mx-4 style-type-none nav-link" ><li>charts</li></Link>
                    <Link to="/products_table" className="mx-4 style-type-none nav-link" ><li>products_table</li></Link>
                </ul>
            </nav>
        </div>
    )
}
export default NavbarRoute;