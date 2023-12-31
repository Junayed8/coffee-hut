import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef= useRef('');
    const navigate= useNavigate();
    const location= useLocation();

    let from= location. state?.from?.pathname||'/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(user){
        navigate(from, {replace:true});
      }
    const resetPassword=async()=>{
        const email = emailRef.current.value;
         await sendPasswordResetEmail(email);
         alert ('Sent Email');
    }
    const handleSubmit= event=>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password= passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    const navigateRegister= event=>{
           navigate('/register');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='login-title text-center mt-4'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='button d-block' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-4'>New to Coffee Hut? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register.</Link></p>
            <p className='text-center mt-4'>Forgot Password? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;