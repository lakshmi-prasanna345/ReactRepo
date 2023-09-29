import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { useNavigate} from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import axios from 'axios';


function Signup() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        console.log("gggggggggggg")
        navigate("/");
    }
    const[data,setData]=useState([])
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/app1/getsignup/');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response= await axios.post('http://127.0.0.1:8000/app1/postsignup/',formData);
            console.log('success',response.data)
            handleNavigate();
            alert("successfully registered")
            
        }
        catch(error){
            console.log("error",error)
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        console.log(formData)
      };
    return (
        <div className='full-body'>
            <div className='loginform'>
                <Form onSubmit={handleSubmit}>
                    <Form.Text className='loginheading'>Signup</Form.Text>
                    <Form.Group className='mb-3 form-group'>
                        <Form.Control type='text' placeholder='user name' className='form-control' name='name' value={formData.name} onChange={handleChange}>

                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder="Enter email" className='form-control'  name="email" value={formData.email} onChange={handleChange}/>
                       
                    </Form.Group>

                    <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                        
                        <Form.Control type="password" placeholder="Password" value={formData.password} name="password" onChange={handleChange}  />
                    </Form.Group>
                    <Form.Group className="mb-3 check" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" style={{color:"green"}} />
                    </Form.Group>
                    <Button variant="primary" type="button" className='login' onClick={handleNavigate} >
                        Login
                    </Button>
                      <Button variant="primary" type='submit' className='signup' >
                        Sign up
                    </Button> 
                  
                </Form>
            </div>
            <div>
                {
                    data.map((item,index)=>(
                        <h3 key={index}>{item.name}     {item.email}    {item.password}</h3>

                    ))
                }
            </div>
        </div>
    );
}

export default Signup;