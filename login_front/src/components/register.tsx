import { FormGroup, FormLabel, FormControl, Row, Col, Button } from "react-bootstrap";
import "../css/bg-utilities.css"
function Register({onSwitch}:any) {
     return(
        <Row className="w-100 ">
            <Col xs={9} lg={6} xxl={3} className="mx-auto d-flex flex-column bg-filter p-5 rounded">
                <h2 className="text-center">Register</h2>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter email" />
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Password" />
                </FormGroup>
                <Button variant="primary" type="submit" onClick={onSwitch}>Register</Button>
                <p className="mt-3 text-center">¿Ya tienes una cuenta?<a href="\Login" >Login</a></p>
            </Col>
        </Row>
    ) 
}

export default Register;