import React from 'react';
import junayed from '../../Images/junayed.jpg';

const About = () => {
    return (
        <div>
            <h2 className='text-center mt-4'>This is about us</h2>
            <div className='d-flex'>
                <div className='ms-4'>
                    <h4>About Me</h4>
                    <p>Hello, I'm Abu Junayed Sakib.<br />
                        I am a front end web developer having more than 1+ years of experience in front end development and I will design a lovely, responsive, and mobile-friendly UI for your website. <br /> I promise you that the standards to which the website is subject are of high quality and effective aesthetics.



                        I would love to support people whether it's custom coding or finding a solution.



                        As a developer, I find that creating a website is so important because it reflects the forward market outlook.

                        My productive work speaks volumes about its modern and standard responsive design. <br />

                        I take the design concepts for initial specifications and then present it to the consumer.



                        My Services includes: <br />


                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap 3,4,5</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                            <li>Responsive design</li>
                            <li>PSD to HTML</li>
                            <li>Figma</li>
                            <li>Github</li>
                            <li>Firebase hosting</li>
                        </ul>


                        I can develop websites for:

                       <ul>
                        <li>Business/Companies</li>
                        <li> Personal Brand</li>
                        <li>Health</li>
                        <li>Sports</li>
                        <li>Photography</li>
                        <li>Entertainment</li>
                        <li>Restaurants</li>
                       </ul>

                        
                        And the list goes on... <br/>


                        Contact me today to experience the best custom front end and responsive website, which will not only be beautiful but will also reflect your business identity. <br/>



                        NOTE: Please send me a message before the order, so we can discuss it. <br/>

                        Best regards <br/>
                        Md. Abu Junayed Sakib</p>
                </div>
                <div>
                    <img src={junayed} alt='' />
                    <br/>
                    <span> Github profile link:
                        <a href="url">https://github.com/Junayed8</a></span>
                </div>
            </div>
        </div>
    );
};

export default About;