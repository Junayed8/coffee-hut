import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='blog-title text-center mt-4 mb-2'>Blogs</h2>
            <div className='blogs'>
                <h4 className='question'>Difference between authentication and authorization</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Authentication</th>
                            <th scope="col">Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>In the authentication process, the identity of users are checked for providing the access to the system.</td>
                            <td>While in authorization process, a the person's or user's authorities are checked for accessing the resources.</td>
                        </tr>
                        <tr>
                            <td>In the authentication process, users or persons are verified.</td>
                            <td>While in this process, users or persons are validated.</td>
                        </tr>
                        <tr>
                            <td>It is done before the authorization process.</td>
                            <td colspan="2">While this process is done after the authentication process.</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className='blogs'>
                <h4 className='question'>The reason to use firebase and the other options to implement authentication</h4>
                <p>Firebase provides a secure and easy way for users to sign into their app. Developers can use Firebase Authentication to support email and password login, Google Sign-In, Facebook Login and more. Realtime Database.</p>
                <p>Some other options of authentication: <br />
                    Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase authentication.</p>
            </div>
            <div className='blogs'>
                <h4 className='question'>The other service firebase provide other than authentication</h4>
                <p>Some other use cases of firebase.</p> <br />
                <p>Real-Time Database: Firebase's real-time database provides a cloud-hosted NoSQL database that allows developers to store and retrieve data in real time, making it ideal for building real-time apps such as social media, gaming, and messaging apps.<br />
                    User Authentication: Firebase provides a robust user authentication system that supports multiple authentication methods, such as email/password, phone, and social media log in, making it ideal for building apps that require user accounts. <br />
                    Hosting: Firebase provides a hosting service that allows developers to deploy their web apps and static assets, making it easy to start web app development. <br />
                    Cloud Storage: Firebase provides a cloud storage service that allows developers to store and retrieve binary files, such as images and videos, making it ideal for building apps that require file storage.</p>
            </div>

        </div>
    );
};

export default Blogs;