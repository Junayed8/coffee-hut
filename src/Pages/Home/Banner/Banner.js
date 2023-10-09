import React from 'react';
import './Banner.css';
import background from '../../../Images/background.jpg';
import { Carousel } from 'react-bootstrap';



//* Banner design *// 

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item >
          <img src={background}/>
          <Carousel.Caption className='caption'>
          <h3>Welcome in the real coffee store</h3>
            <p>Feel the real test of royal coffee.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;