import REACT,{useState} from "react";
import { Link } from "react-router-dom";

const Count =()=>
{
    const[count,setCount]=useState(0);
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
            <h1>count</h1>
        <button className="btn btn-success" onClick={()=>setCount(count+1)}>{count}</button>
    </div>
)
}

export default Count;