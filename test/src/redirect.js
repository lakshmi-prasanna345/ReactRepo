import React, { useState } from "react";
import Signup from "./signup";
import { Link } from "react-router-dom";
const Redirect=()=>{
    const[route,setRoute]=useState(false);
    if(route){
        return<Redirect to="/signup"/>
    }
    return(
        <div>
            
                <h1>hello welcome to applines</h1>
                <button onClick={()=>setRoute(true)}>redirect to signup.js</button>
        </div>
    )
}
export default Redirect;