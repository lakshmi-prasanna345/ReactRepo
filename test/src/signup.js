import React, { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        acceptTerms: false  // Added state for checkbox
    });

    const { username, email, password, confirmPassword, gender, acceptTerms } = data;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Update the state based on the input type
        setData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (username.length <= 5) {
            alert("Username should be at least 5 characters");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else if (!acceptTerms) {
            alert("Please accept the terms and conditions");
        } else {
            console.log(data);
        }
    };
    const[route,setRoute]=useState(false);
    
    return (
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
        <div className="border">
            
            <center>
                <h1 className="h3">Signup</h1>
                <form onSubmit={handleSubmit}>
                    <br></br>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        placeholder="Username"
                    ></input>
                    <br></br>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    ></input>
                    <br></br>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password"
                    ></input>
                    <br></br>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                    ></input>
                    <br></br>
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        onChange={handleChange}
                    />
                    Male
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        onChange={handleChange}
                    />
                    Female
                    <br></br>
                    <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={acceptTerms}
                        onChange={handleChange}
                    />{" "}
                    I accept all the terms and conditions
                    <br></br>
                    <input type="submit" name="submit"></input>
                </form>
            </center>
            
        </div>
        </div>

    );
};

export default Signup;
 