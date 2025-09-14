import { FormGroup, FormLabel, FormControl, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import "../css/bg-utilities.css"
function Login({onSwitch}:any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event:any) => {
        event.preventDefault(); //Evita el comportamiento por defecto del formulario
        try{
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            if (!response.ok) {
                throw new Error('Credenciales inválidas');
            }

            const data = await response.json();
            console.log('Login successful:', data);
        }catch(error){
            console.error('Error during login:', error);
        }
        
    };


    return(
        <Row className="w-100 ">
            <Col xs={9} lg={6} xxl={3} className="mx-auto d-flex flex-column bg-filter p-5 rounded">
                <h2 className="text-center">Login</h2>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                    />
                    <FormLabel>Password</FormLabel>
                    <FormControl 
                        type="password" 
                        placeholder="Password"
                        value={password} 
                    />
                </FormGroup>
                <Button variant="primary" type="submit" onClick={onSwitch}>Login</Button>
                <p className="mt-3 text-center">¿Eres nuevo?<a href="\Register" >Register</a></p>
            </Col>
        </Row>
    ) 
}

export default Login;