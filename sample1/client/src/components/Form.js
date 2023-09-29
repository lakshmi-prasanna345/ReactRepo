import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import ViewRecipes from './recipes';
import axios from 'axios';

function RecipeForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Description: '',
    Type: 'vegetarian',
    ImageUrl: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };
  useEffect(() => {
    if (formData.Name && formData.Description && formData.Type && formData.ImageUrl) {
      handleSubmit();
    }

  }, [])

  // var xyz;
  const handleSubmit = async (event) => {
    event.preventDefault();
    // xyz={ "Name": document.forms[0]["Name"].value,
    //     "Description":document.forms[0]["Description"].value,
    //     "Type": document.forms[0]["recipeType"].value,
    //     "ImageUrl": document.forms[0]["recipeImageUrl"].value}
    //     console.log("xyz",xyz)
    fetch('http://127.0.0.1:8000/app1/post/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json(formData))
      .then(newRecipe => {

        setFormData({
          Name: '',
          Description: '',
          Type: 'vegetarian',
          ImageUrl: '',
        });
        alert("recipe added successfully---------")
        console.log(formData)
      })
      .catch(error => console.error('Error adding recipe:', error));
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("recipes");
  }

  return (
    <div>
      <div className="bodyimage">
        <h1></h1>
      </div>
      <div>
        <Form className=" form1" onSubmit={handleSubmit} style={{ boxShadow: " 3px 3px 3px 5px rgba(0, 0, 0, 0.5)", width: "600px", marginTop: "-800px", marginLeft: "1100px" }}>
          <center><h1 className='text-success' style={{ marginTop: "30px" }}>Create Recipe</h1></center>
          <Form.Group controlId="Name" className='mt-5' id='idname'>
            <Form.Control
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder='Recipe Name'
              className='hover.shadow '
              size='lg'
              style={{
                width: "450px",        // Set a fixed width
                whiteSpace: "nowrap", // Prevent line breaks
                overflow: "hidden",   // Hide overflow text
                textOverflow: "ellipsis",// Add ellipsis for overflow
                marginLeft: "60px"

              }}
            />
          </Form.Group>

          <Form.Group controlId="Description">

            <Form.Control
              as="textarea"
              rows={4}
              name="Description"
              value={formData.Description}
              onChange={(e) => { handleChange(e) }}
              placeholder='Recipe Description'
              className='hover-shadow mt-2'
              size='lg'
              style={{
                width: "450px",        // Set a fixed width
                whiteSpace: "nowrap", // Prevent line breaks
                overflow: "hidden",   // Hide overflow text
                textOverflow: "ellipsis",// Add ellipsis for overflow
                marginLeft: "60px"
              }}

            />
          </Form.Group>

          <Form.Group controlId="Type" className='mt-2'>

            <Form.Control
              as="select"
              name="Type"
              value={formData.Type}
              onChange={handleChange}
              placeholder='Recipe Type'
              size='lg'
              style={{
                width: "450px",        // Set a fixed width
                whiteSpace: "nowrap", // Prevent line breaks
                overflow: "hidden",   // Hide overflow text
                textOverflow: "ellipsis",// Add ellipsis for overflow
                marginLeft: "60px"
              }}

            >
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
              <option value="Deserts">Deserts</option>
              <option value="sweets">sweets</option>
              <option value="Chocolates">Chocolates</option>
              <option value="Cookies">Cookies</option>
              <option value="Cakes">Cakes</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="ImageUrl">

            <Form.Control
              type="text"
              name="ImageUrl"
              value={formData.ImageUrl}
              onChange={handleChange}
              placeholder='Enter Image URL'
              className='mt-2'
              size='lg'
              style={{
                width: "450px",        // Set a fixed width
                whiteSpace: "nowrap", // Prevent line breaks
                overflow: "hidden",   // Hide overflow text
                textOverflow: "ellipsis",// Add ellipsis for overflow
                marginLeft: "60px"
              }}

            />
          </Form.Group>

          <Button variant="success recipecreate" type="submit" style={{ marginLeft: "100px", marginTop: "30px" }}>
            Create Recipe
          </Button>
          <Button variant="success" onClick={handleNavigate} style={{ marginLeft: "80px", marginTop: "20px" }}>
            View recipes
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RecipeForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// function RecipeCreation() {
//   const [recipeData, setRecipeData] = useState({
//     title: '',
//     description: '',
//     recipeType: 'veg',
//     createdAt: '', // You can either set a default date or use a date picker component.
//     imageUrl: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipeData({ ...recipeData, [name]: value });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // Send a POST request to your Django API to create a recipe
//   //   // You may use Axios, Fetch, or any other HTTP library here.
//   //   // Example: 
//   //   axios.post('http://127.0.0.1:8000/app1/post/', recipeData)
//   //     .then((response) => {
//   //       // Handle success or show a success message
//   //     })
//   //     .catch((error) => {
//   //       // Handle error or show an error message
//   //     });
//   // };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://127.0.0.1:8000/app1/post/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(newStudent => {
//         setStudents([...students, newStudent]);
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           course: '',
//         });
//       })
//       .catch(error => console.error('Error adding student:', error));
//   };


//   return (
//     <div>
//       <h2>Create a Recipe</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Recipe Title"
//           value={recipeData.title}
//           onChange={handleChange}
//         />
//         <textarea
//           name="description"
//           placeholder="Recipe Description"
//           value={recipeData.description}
//           onChange={handleChange}
//         ></textarea>
//         <select
//           name="recipeType"
//           value={recipeData.recipeType}
//           onChange={handleChange}
//         >
//           <option value="veg">Vegetarian</option>
//           <option value="nonveg">Non-Vegetarian</option>
//         </select>
//         <input
//           type="date"
//           name="createdAt"
//           placeholder="Recipe Created At"
//           value={recipeData.createdAt}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="imageUrl"
//           placeholder="Recipe Image URL"
//           value={recipeData.imageUrl}
//           onChange={handleChange}
//         />
//         <button type="submit">Add Recipe</button>
//       </form>
//     </div>
//   );
// }

// export default RecipeCreation;




// function RecipeForm() {
//   // ... (existing code)

//   const navigate = useNavigate();
//   const handleNavigate = () => {
//     navigate("recipes");
//   }

//   return (
//     <div className="container my-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <Form className="p-4 shadow" onSubmit={handleSubmit}>
//             <h1 className='text-center mb-4'>Create Recipe</h1>
//             <Form.Group controlId="Name">
//               <Form.Control
//                 type="text"
//                 name="Name"
//                 value={formData.Name}
//                 onChange={handleChange}
//                 placeholder='Recipe Name'
//               />
//             </Form.Group>

//             <Form.Group controlId="Description">
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 name="Description"
//                 value={formData.Description}
//                 onChange={handleChange}
//                 placeholder='Recipe Description'
//               />
//             </Form.Group>

//             <Form.Group controlId="Type">
//               <Form.Control
//                 as="select"
//                 name="Type"
//                 value={formData.Type}
//                 onChange={handleChange}
//               >
//                 <option value="vegetarian">Vegetarian</option>
//                 <option value="non-vegetarian">Non-Vegetarian</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="ImageUrl">
//               <Form.Control
//                 type="text"
//                 name="ImageUrl"
//                 value={formData.ImageUrl}
//                 onChange={handleChange}
//                 placeholder='Enter Image URL'
//               />
//             </Form.Group>

//             <Button variant="success" type="submit" className='mr-3'>
//               Create Recipe
//             </Button>
//             <Button variant="success" onClick={handleNavigate}>
//               View recipes
//             </Button>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeForm;

