import BestSeller from './best sellers/bestSeller';
import './App.css';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import React from 'react';
import Count from "./functional";
import Navbar from "./best sellers/Navbar";
import Login from './login';
import Signup from './signup';
import Fetch from './fetch';
import Axios from './axios';
import Barchart from './charts';
import NavbarRoute from './navbar';
import Products_table from './Products_table';
import Redirect from './redirect';
import Images from './day2/day2';
import Employee from './day3/Employee';
import ClassComponent from './day3/EmployeeComponent';
import Data from "./day3/data";
import Counter from './day5/counter';
import Products_watch from './day5/products';


{/*const App=()=>{
  const rootStyles={
    backgroundColor:"black",
  }
  const urls=["./assests/img1.jpg","./assests/img2.jpg","./assests/img3.jpg","./assests/img1.jpg","./assests/img2.jpg","./assests/img3.jpg"]
  return(
   <Router>
    <Navbar />
    <div className='d-flex mt-5'>
      <Switch>
        <Route exact path='/'>
          {urls.map((url, index) => (
            <div key={index}>
              <BestSeller book={url} />
            </div>
          ))}
        </Route>
        <Route path='/count'>
          <Count />
        </Route>
      </Switch>
    </div>
  </Router>;
  );
};*/}
function App() {
  return (
    <div>
     <BrowserRouter>
     
      <Routes>
        <Route exact path="/" element={<NavbarRoute/>}/>
        <Route path='/images' element={<Images/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/products_watch' element={<Products_watch/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/charts' element={<Barchart/>}/>
        <Route path='/products_table' element={<Products_table/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
      {/*<div>
        <Signup />
      </div>
      <Login />
     <div>
        <Fetch/>
      </div>
      <div>
        <Axios/>
      </div>
      <div>
        <Barchart/>
      </div>
      <Products/>
<Redirect/>
  </div>
  )
}*/}




export default App;
