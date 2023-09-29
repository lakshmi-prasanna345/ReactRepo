import React from "react";
import Watch from "./watch";
import { Link } from "react-router-dom";
const Products_watch=()=>{
    var array=[
        {
            SNO: "1",
            Image:"./assests/assests/watch.jpeg",
            Name: "MI watch",
            price: 1500,
            qty: 15,
          },
          {
            SNO: "2",
            Image: "./assests/assests/watch.jpeg",
            Name: "Boat watch",
            price: 2700,
            qty: 1,
          },
          {
            SNO: "3",
            Image: "./assests/assests/watch.jpeg",
            Name: "FastTrack watch",
            price: 1300,
            qty: 3,
          },
          {
            SNO: "4",
            Image:"./assests/assests/watch.jpeg",
            Name: "Samsung watch",
            price: 1800,
            qty: 11,
          },
          {
            SNO: "5",
            Image:"./assests/assests/watch.jpeg",
            Name: "Apple watch",
            price: 3000,
            qty: 0,
          },
    ]
    return(
        
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
             <center><h4 className="text-success">Product Cart</h4>
             <p>Paris is the department of highest proportion of the highly educated people</p>
             </center>
            {
             array.map(
                (item)=>{
                   return <Watch watch={item.Image} name={item.Name} price={item.price} quality={item.qty}/>
                }
            )
}
        </div>
    )


}
export default Products_watch;