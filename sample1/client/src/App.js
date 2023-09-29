
import React from 'react';
import RecipeForm from './components/Form';
import ViewRecipes from './components/recipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeDetails from './components/recipedetails';
import Login from './components/login';
import Signup from './components/signup';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="form" element={<RecipeForm />} />
          <Route path="recipes" element={<ViewRecipes/>} />
          <Route path="recipedetails" element={<RecipeDetails/>} />
          <Route path="/" element={<Login/>} />
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </Router>
     
      </div>
  );
}

export default App;

