import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
const Fetch=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then(
            response=>response.json()
        ).then(json=>setData(json))
    },[])
    return(
        <div>
            <nav class="navbar navbar-dark bg-dark text-white">
                <ul className="navbar-nav">
                    <Link to="/signup" className="mx-4 style-type-none nav-link" ><li>Sign up</li></Link>
                    <Link to="/charts" className="mx-4 style-type-none nav-link" ><li>charts</li></Link>
                    <Link to="/fetch" className="mx-4 style-type-none nav-link"><li>fetch</li></Link>
                    <Link to='/count' className="mx-4 style-type-none nav-link"><li>Count</li></Link>
                </ul>
            </nav>
        <div>
            {data.map((item)=> <li key={item.id}>{item.title}</li>)}
        </div>
        </div>
    )
}
export default Fetch;