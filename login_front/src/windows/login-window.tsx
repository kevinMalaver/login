import Login from "../components/login";

function LoginWindow({children}: {children: React.ReactNode}) { // Destrutruracion de props tomando Children
    const bgStyle = {
        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1681426710520-7c56c9f563d2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZW50YXJpb3xlbnwwfHwwfHx8MA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        //backgroundColor: '#000000'
    };
    return (
        <div style={bgStyle} className="vh-100 d-flex justify-content-center align-items-center">
            {children}
        </div>
        
    );
}
export default LoginWindow;