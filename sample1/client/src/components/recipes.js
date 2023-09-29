import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import RecipeDetails from './recipedetails';



function ViewRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [recordId, setRecordId] = useState(0);
    const [updatedRecipe, setUpdatedRecipe] = useState({
        Name: '',
        Description: '',
        Type: 'vegetarian',
        ImageUrl: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);



    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/app1/get/');
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    }
    console.log(recipes)
    const handleDelete = (id) => {
        // Sending  a DELETE request to Django API to delete the recipe
        // here we  can use Axios, Fetch, or any other HTTP library here.
        // Example: 
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/app1/del/` + id + "/")
            .then((res) => {
                // Optionally, update the UI to remove the deleted recipe
                // You can filter out the deleted recipe from the state or perform a new fetch.
                alert("deleted successfully")

                setRecipes(recipes.filter(recipe => recipe.id !== id));
            })
            .catch((error) => {
                console.log("error while deleting")
                // Handle error or show an error message
            });
    };

    const handleEdit = (id) => {
        console.log(id)
        setRecordId(id);
        setShowModal(true);
        axios.get(`http://127.0.0.1:8000/app1/update/${id}/`)
            .then((res) => {
                setUpdatedRecipe({
                    Description: res.data.Description,
                    ImageUrl: res.data.ImageUrl,
                    Name: res.data.Name,
                    Type: res.data.Type,
                });

                console.log(updatedRecipe, "********************");
                console.log(res.data);

            })
            .catch((error) => console.log(error));
    }

    const handleFormSubmit = (id) => {
        // e.preventDefault();
        // Send a PUT request to update the recipe
        axios.put(`http://127.0.0.1:8000/app1/put/${id}/`, updatedRecipe)
            .then((response) => {

                // Update the recipe in the recipes state


                setShowModal(false); // Close the modal
                alert(response.name, "is updated successfully")
            })

            .catch((error) => console.log('Error while updating:', error));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRecipe(prevRecipe => ({ ...prevRecipe, [name]: value }));
    };
    //    useEffect(()=>{
    //     axios.get("http://127.0.0.1:8000/app1/get/${data}/")
    //     .then((res)=>{
    //         console.log(res.data);
    //     })
    //     .catch((error)=>console.log(error));
    //    },[data])
    const handleSearch = () => {
        // Fetch data based on the search query
        axios.get(`http://127.0.0.1:8000/app1/search/?search=${searchQuery}`)
            .then(res => {
                // setData(res.data);
                setRecipes(res.data);
                // console.log(res.data);
            })

            .catch(err => console.log(err));
    };
    // useEffect(() => {
    //     fetchData();
    // }, [selectedCondition]);

    // const fetchData = () => {
    //     let url = "http://127.0.0.1:8000/dropdown/";
    //     if (selectedCondition) {
    //         url += `?selectedCondition=${selectedCondition}`;
    //     }
    //     console.log(url)
    //     axios.get(url)
    //         .then(res => {
    //             setData(res.data);
    //         })
    //         .catch(err => console.log(err));
    // };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary bgimage hover-shadow" style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}>
                <Container fluid>
                    <NavbarBrand href='#'>
                        <img
                            src='https://img.freepik.com/premium-vector/kitchen-chef-logo-design-vector-template_15146-1164.jpg?size=626&ext=jpg&ga=GA1.1.1223900187.1693472165&semt=ais'
                            height='100px'
                            alt=''
                            loading='lazy'
                            style={{ borderRadius: "50px", marginRight: "0px" }}

                        />
                        <span className='text-white bolder' style={{ fontSize: "25px" }}>Taste
                            It</span>
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action2" className="btn btn-primary text-light" t style={{ color: "white", marginLeft: "40px", fontSize: "29px" }} onClick={handleNavigate}>Home</Nav.Link>
                            <NavDropdown
                                name="week"
                                title="Filter"
                                id="navbarScrollingDropdown"
                                onChange={(e) => { setData(e.target.value) }}
                                className="bi bi-three-dots bg-light text-light hover-shadow btn btn-primary"
                                style={{ borderRadius: "7px", marginLeft: "60px", padding: "5px", fontSize: "20px" }}

                            >
                                <NavDropdown.Item href="#action3" >This Week</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" >
                                    Lastweek
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="text"
                                placeholder="Search by recipe name"
                                className="me-2 "
                                aria-label="Search"
                                value={searchQuery}
                                onChange={event => setSearchQuery(event.target.value)}
                            />
                            <Button onClick={handleSearch} variant="success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <span><i className="bi bi-three-dots"></i></span>
            <center className='mt-5 mb-5 texthover' ><h1>View Recipes</h1></center>
            <div>
            </div>
            {/* recipes */}
            <div className='d-flex' style={{ flexWrap: "wrap", marginLeft: "110px" }}>
                {recipes.map(recipe => (
                    <Card key={recipe.id} style={{ width: '18rem', marginRight: "27px", height: "600px", width: "400px", marginTop: "27px", boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.5)" }}>
                        {/* <Card.Img variant="top" src={recipe.ImageUrl} alt={recipe.Name}  style={{height:"400px",width:"400px"}}/> */}
                        <img src={recipe.ImageUrl} alt={recipe.Name} style={{ height: "350px", width: "400px" }} />

                        <Card.Body>
                            <div className='des'>
                                <Card.Title>{recipe.Name}</Card.Title>
                                <Card.Text>{recipe.Description}</Card.Text>
                            </div>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" className="bi bi-three-dots" ></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleEdit(recipe.id)}>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDelete(recipe.id)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                    </Card>

                ))}
                <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <center><Modal.Title>Edit Recipe</Modal.Title></center>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={() => handleFormSubmit(recordId)} >
                            <Form.Group controlId="Name" className='mt-2 text-center'>

                                <Form.Control
                                    type="text"
                                    name="Name"
                                    value={updatedRecipe.Name}
                                    onChange={handleInputChange}
                                    placeholder='Recipe Name'
                                    dialogClassName="borderedit"
                                />
                            </Form.Group>

                            <Form.Group controlId="Description" className='mt-2 text-center'>

                                <Form.Control
                                    dialogClassName="borderedit"
                                    as="textarea"
                                    name="Description"
                                    value={updatedRecipe.Description}
                                    onChange={handleInputChange}
                                    placeholder='Recipe Description'
                                />
                            </Form.Group>

                            <Form.Group controlId="Type" className='mt-2 text-center'>

                                <Form.Control
                                    as="select"
                                    name="Type"
                                    value={updatedRecipe.Type}
                                    onChange={handleInputChange}
                                    placeholder='Type'
                                    dialogClassName="borderedit"
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

                            <Form.Group controlId="ImageUrl" className='mt-2 text-center'>

                                <Form.Control
                                    type="url"
                                    name="ImageUrl"
                                    value={updatedRecipe.ImageUrl}
                                    onChange={handleInputChange}
                                    placeholder='Image Url'
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className='mt-3 text-center'>
                                Save Changes
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
            <div></div>
        </div>
    );
}

export default ViewRecipes;




// import React, { useState, useEffect } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import axios from 'axios';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
// import Modal from 'react-bootstrap/Modal';

// function ViewRecipes() {
//     const [recipes, setRecipes] = useState([]);
//     const [selectedRecipe, setSelectedRecipe] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [editedRecipe, setEditedRecipe] = useState({
//         name: '',
//         description: '',
//         imageUrl: ''
//     });

//     useEffect(() => {
//         fetchRecipes();
//     }, []);

//     const fetchRecipes = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/app1/get/');
//             setRecipes(response.data);
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//         }
//     };

//     // const handleEdit = (id) => {
//     //     const recipe = recipes.find((recipe) => recipe.id === id);
//     //     setSelectedRecipe(recipe);
//     //     setEditedRecipe({
//     //         name: recipe.name,
//     //         description: recipe.description,
//     //         imageUrl: recipe.imageUrl
//     //     });
//     //     setShowModal(true);
//     // };

//     //   const handleDelete = (id) => {
//     //     axios
//     //       .delete(`http://127.0.0.1:8000/app1/del/${id}`)
//     //       .then(() => {
//     //         setRecipes(recipes.filter((recipe) => recipe.id !== id));
//     //       })
//     //       .catch((error) => {
//     //         console.log('Error while deleting:', error);
//     //       });
//     //   };
//     const handleDelete = (id) => {
//         // Send a DELETE request to your Django API to delete the recipe
//         // You may use Axios, Fetch, or any other HTTP library here.
//         // Example:
//         axios
//             .delete(`http://127.0.0.1:8000/app1/del/${id}`)
//             .then(() => {
//                 // Optionally, update the UI to remove the deleted recipe
//                 // You can filter out the deleted recipe from the state or perform a new fetch.
//                 setRecipes(recipes.filter((recipe) => recipe.id !== id));
//             })
//             .catch((error) => {
//                 console.log("error while deleting");
//                 // Handle error or show an error message
//             });
//     };
//     const handleEdit = () => {
//         // Send a PUT request to your Django API to update the recipe
//         // You may use Axios, Fetch, or any other HTTP library here.
//         // Example:
//         axios
//             .put(`http://127.0.0.1:8000/app1/edit/${recipe.id}`, editRecipe)
//             .then(() => {
//                 // Optionally, update the UI to reflect the changes
//                 // You can perform a new fetch or update the specific recipe in the state.
//                 // For example:
//                 const updatedRecipes = recipes.map((r) => {
//                     if (r.id === recipe.id) {
//                         return { ...r, ...editRecipe };
//                     }
//                     return r;
//                 });
//                 setRecipes(updatedRecipes);
//                 handleModal(); // Close the modal after saving changes
//             })
//             .catch((error) => {
//                 console.log("error while editing");
//                 // Handle error or show an error message
//             });
//     };


//     const handleModalClose = () => {
//         setShowModal(false);
//     };

//     const handleInputChange = (e) => {
//         setEditedRecipe({
//             ...editedRecipe,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         axios
//             .put(`http://127.0.0.1:8000/app1/update/${selectedRecipe.id}`, editedRecipe)
//             .then((response) => {
//                 const updatedRecipe = response.data;
//                 setRecipes(
//                     recipes.map((recipe) =>
//                         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//                     )
//                 );
//                 setShowModal(false);
//             })
//             .catch((error) => {
//                 console.log('Error while updating:', error);
//             });
//     };

//     return (
//         <div>
//             <Modal show={showModal} onHide={handleModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Recipe</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group controlId="recipeName">
//                             <Form.Label>Recipe Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 value={editRecipe.name}
//                                 onChange={(e) => setEditRecipe({ ...editRecipe, name: e.target.value })}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="recipeDescription">
//                             <Form.Label>Recipe Description</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 rows={3}
//                                 value={editRecipe.description}
//                                 onChange={(e) => setEditRecipe({ ...editRecipe, description: e.target.value })}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="recipeType">
//                             <Form.Label>Recipe Type</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 value={editRecipe.type}
//                                 onChange={(e) => setEditRecipe({ ...editRecipe, type: e.target.value })}
//                             >
//                                 <option value="veg">Veg</option>
//                                 <option value="non-veg">Non-Veg</option>
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="recipeCreatedAt">
//                             <Form.Label>Recipe Created At</Form.Label>
//                             <Form.Control
//                                 type="date"
//                                 value={editRecipe.createdAt}
//                                 onChange={(e) => setEditRecipe({ ...editRecipe, createdAt: e.target.value })}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="recipeImageUrl">
//                             <Form.Label>Recipe Image URL</Form.Label>
//                             <InputGroup>
//                                 <FormControl
//                                     type="text"
//                                     value={editRecipe.imageUrl}
//                                     onChange={(e) => setEditRecipe({ ...editRecipe, imageUrl: e.target.value })}
//                                 />
//                                 <Button variant="outline-secondary">Search</Button>
//                             </InputGroup>
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleModal}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleEdit}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <Navbar expand="lg" className="bg-body-tertiary">
//                 {/* Navbar code */}
//             </Navbar>
//             {/* Rest of the code */}
//             {/* Recipe cards */}
//             <div className="d-flex" style={{ flexWrap: 'wrap', marginLeft: '110px' }}>
//                 {recipes.map((recipe) => (
//                     <Card
//                         key={recipe.id}
//                         style={{ width: '18rem', marginRight: '27px', height: '600px', width: '400px', marginTop: '15px' }}
//                         className="shadow-2-strong"
//                     >
//                         {/* Card code */}
//                         <Dropdown>
//                             <Dropdown.Toggle variant="primary" className="bi bi-three-dots"></Dropdown.Toggle>
//                             <Dropdown.Menu>
//                                 <Dropdown.Item onClick={() => handleEdit(recipe.id)}>Edit</Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleDelete(recipe.id)}>Delete</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     </Card>
//                 ))}
//             </div>

//             {/* Edit Recipe Modal */}
//             {/* <Modal show={showModal} onHide={handleModalClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Recipe</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleFormSubmit}>
//                         <Form.Group controlId="recipeName">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="name"
//                                 value={editedRecipe.name}
//                                 onChange={handleInputChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="recipeDescription">
//                             <Form.Label>Description</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 name="description"
//                                 value={editedRecipe.description}
//                                 onChange={handleInputChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="recipeImageUrl">
//                             <Form.Label>Image URL</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="imageUrl"
//                                 value={editedRecipe.imageUrl}
//                                 onChange={handleInputChange}
//                             />
//                         </Form.Group>
//                         <Button variant="primary" type="submit">
//                             Save Changes
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal> */}
//         </div>
//     );
// }

// export default ViewRecipes;

