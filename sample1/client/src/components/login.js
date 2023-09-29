import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import React,{ useState,useEffect} from 'react';
import axios from 'axios';


function Login() {
    const [data,setData]=useState([]);
    const [checkdata,setCheckdata]=useState({
        email:'',
        password:''
    });
    const navigate = useNavigate();
    const handleNavigate = () => {
        console.log("gggggggggggg")
        navigate("signup");
    }
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
    console.log(data)
    const handlechange=(e)=>
    {
        const {name,value}=e.target;
        setCheckdata({...checkdata,[name]:value,})
        console.log(checkdata)
    }
    return (
        <div className='full-body'>
            <div className='loginform'>
                <Form>
                    <Form.Text className='loginheading'>Login</Form.Text>
                    <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder="Enter email" className='form-control' value={checkdata.email} name='email' required onChange={handlechange}/>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                        
                        <Form.Control type="password" placeholder="Password" value={checkdata.password} name='password' onChange={handlechange} required />
                    </Form.Group>
                    <Form.Group className="mb-3 check" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" style={{color:"green"}} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='login' >
                        Login
                    </Button>
                    <Button variant="primary"  className='signup' onClick={handleNavigate} >
                        Sign up
                    </Button>
                  
                </Form>    

            </div>
            <div>
                <h1>{checkdata.email}</h1>
                <h1>{checkdata.password}</h1>
                {
                    data.map((item,index)=>(
                        <h1 key={index}>{item.email}   {item.password}</h1>
                        
                    ))
                }
               
            </div>
        </div>
    );
}

export default Login;