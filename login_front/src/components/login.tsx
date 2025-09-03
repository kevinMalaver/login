import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
function Login(){
    return(
        <><FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" placeholder="Enter email" />
            <FormLabel>Password</FormLabel>
            <FormControl type="password" placeholder="Password" />
        </FormGroup>
        <div>Login Component</div>
        </>
    ) 
}

export default Login;