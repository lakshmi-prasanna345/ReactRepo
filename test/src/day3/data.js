import Employee from "./Employee";
import { Link } from "react-router-dom";
import ClassComponent from "./EmployeeComponent";
function Data(){   
    var state={
      name:["lucky","sai","madhavi","nagabushan reddy","manu"],
      age:[21,22,39,43]
    }
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
      {state.name.map(
        (name,index)=>(
          <div>
            <Employee name={name} age={state.age[index]}/>
            <ClassComponent name={name} age={state.age[index]}/>
          </div>
      )
      )
        }
    </div>
  )}
  export default Data;