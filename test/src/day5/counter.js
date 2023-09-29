import React, { useState } from "react";
import { Link } from "react-router-dom";
const Counter = () => {
    const [count, setCount] = useState(0);
    let increment = () => {
        setCount(count + 1)
    }
    let decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        else {
            setCount(0)
        }
    }
    return (
        <div>
            <div>
            <nav class="navbar navbar-dark bg-dark text-white">
                <ul className="navbar-nav">
                    <Link to="/" className="mx-4 style-type-none nav-link" ><li>Home</li></Link>
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
            <div class="card" style={{ width: "18rem" }}>
                <div className=" navbar bg-primary text-white h1">Counter</div>
                <div class="card-body">
                    <h1>{count}</h1>
                    <button type="button" onClick={increment} className="btn btn-success" >Increment</button>
                    <button type="button" onClick={decrement} className="btn btn-warning mx-2">Decrement</button>

                </div>
            </div>


        </div>
    )
}
export default Counter;