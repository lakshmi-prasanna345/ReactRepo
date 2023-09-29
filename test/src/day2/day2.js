import Fun from "./day2_sub";
import { Link } from "react-router-dom";
const Images=()=>{
const url={id:"img5",src:"./assests/assests/img1.jpg"}
const url2={id:"img2",src:"./assests/assests/img2.jpg"}
const url3={id:"img3",src:"./assests/assests/img3.jpg"}
const url4={id:"img4",src:"./assests/assests/img4.jpg"}
return (
  <div className='d-flex'>
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
    <Fun key={url.id} image={url.src}/>
    <Fun key={url2.id} image={url2.src}/>
    <Fun key={url3.id} image={url3.src}/>
    <Fun key={url4.id} image={url4.src}/>

  </div>
);
}
export default Images;