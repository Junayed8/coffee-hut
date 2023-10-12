import React from 'react';
import google from '../../Images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    // Social login button
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;



    if (error) {
        errorElement= <div className='text-danger'>
            <p>Error: {error.message}</p>
            </div>
    
      }
      if (loading) {
        return <p>Loading...</p>;
      }

      if(user){
        navigate('/home');
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=> signInWithGoogle()} className='btn btn-info d-block w-50 mx-auto'>
                    <img style={{width:'25px'}} src={google} alt=''/>
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;