import React from 'react';
import { Image } from 'react-bootstrap';
import MainImage from '../assets/aoe2image.png';

const Homepage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className='container'>
          <Image
            src={MainImage}
            className="aeo-image"
            rounded
            alt="aeo2-image"
          />
      </div>
    </div>
  )
}

export default Homepage;