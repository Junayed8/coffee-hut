import React from 'react';
import './NotFound.css';

const NotFound = () => {

    // Content not found//
    return (
        <div>
            <div className='error'>
            <p>Content not found. Check your spelling or </p>
                <p>follow the right route</p>
            </div>
                <h4 className='text-center'>Error: 404</h4>
        </div>
    );
};

export default NotFound;