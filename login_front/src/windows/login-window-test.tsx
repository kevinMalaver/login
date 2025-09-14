import { Container, Row, Col } from "react-bootstrap";
import Login from "../components/login";
import { useState } from "react";
import Register from "../components/register";

function LoginWindowTest() {
    const [isRegister, setIsRegister] = useState(false);
    const FormContent = isRegister ? <Register onSwitch = {() => setIsRegister(false)}/> : <Login onSwitch = {() => setIsRegister(true)}/>;
    const bgStyle = {
        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1681426710520-7c56c9f563d2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZW50YXJpb3xlbnwwfHwwfHx8MA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const firstColStyle = isRegister ? {size: 4, content: FormContent, style: {backgroundColor: '#f8f9fa'}} :{size: 8, content: null, style: {}};
    const secondColStyle = isRegister ? {size: 8, content: null, style: {}} : {size: 4, content: FormContent, style: {backgroundColor: '#f8f9fa'}};
    console.log(isRegister? "Register":"Login");
    return (
        <Container fluid className="vh-100" style={bgStyle}>
            <Row className="h-100">
                <Col md={firstColStyle.size} style={firstColStyle.style}>
                    {firstColStyle.content}
                    
                </Col>
                <Col md={secondColStyle.size} style={secondColStyle.style}>
                    {secondColStyle.content}
                </Col>
            </Row>
        </Container>
    );
}
export default LoginWindowTest;