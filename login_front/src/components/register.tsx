import { FormGroup, FormLabel, FormControl, Row, Col, Button } from "react-bootstrap";
function Register({onSwitch}:any) {
    return(
        <Row className="h-100">
            <Col md={12} lg={9} xl={6} className="mx-auto d-flex flex-column justify-content-center">
                <h2 className="text-center">Register</h2>
                <FormGroup className="mb-3 mt-3" controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter email" />
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Password" />
                </FormGroup>
                <Button variant="primary" onClick={onSwitch} >Login</Button>
            </Col>
        </Row>
    ) 
}

export default Register;