import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user]= useAuthState(auth);
  
  // signOut function
  const handleSignOut=()=>{
    signOut(auth);
  }
    return (

      //Responsive nav // 



        <Navbar  sticky='top' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt=''/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link href='home#items'>Items</Nav.Link>
            <Nav.Link as={Link} to="about">About Us</Nav.Link>
            
            {
              user ?
              <button onClick={handleSignOut}>sign out</button>
              :
              <Nav.Link as={Link} to="login">Login</Nav.Link>
            }
           
          </Nav>
        </Container>
      </Navbar>
    );
};

export default  Header;