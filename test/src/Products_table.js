import React, { useState } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";

const Products_table = () => {
    const array = 
        [{
            SNO: "1",
            Image:"https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398879-sm-r870nzgainu-481111378?$1300_1038_PNG$",
            Name: "MI watch",
            price: 1500,
            qty: 15,
          },
          {
            SNO: "2",
            Image: "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398879-sm-r870nzgainu-481111378?$1300_1038_PNG$",
            Name: "Boat watch",
            price: 2700,
            qty: 1,
          },
          {
            SNO: "3",
            Image: "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398879-sm-r870nzgainu-481111378?$1300_1038_PNG$",
            Name: "FastTrack watch",
            price: 1300,
            qty: 3,
          },
          {
            SNO: "4",
            Image: "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398879-sm-r870nzgainu-481111378?$1300_1038_PNG$",
            Name: "Samsung watch",
            price: 1800,
            qty: 11,
          },
          {
            SNO: "5",
            Image: "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398879-sm-r870nzgainu-481111378?$1300_1038_PNG$",
            Name: "Apple watch",
            price: 3000,
            qty: 0,
          }]
          const [totalAmount, setTotalAmount] = useState(0);

          const updateTotalAmount = (itemPrice, count) => {
            setTotalAmount(totalAmount + itemPrice * count);
          };
        

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
            <table className="table table-striped mt-3">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">Product ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item) => (
                        <Table key={item.SNO} {...item} 
                        updateTotalAmount={updateTotalAmount} />
                    ))}
                    <tr>
                        <th colSpan="4"></th>
                        <th>grand total</th>
                        <th> {totalAmount}</th>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
};



export default Products_table;
