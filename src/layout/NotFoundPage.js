import React from 'react';
import { Image } from 'react-bootstrap';
import NotFound from '../assets/404notfound.gif';

const NotFoundPage = () => {
    return (
        <div>
          <div className='container'>
              <Image
                src={NotFound}
                className="mb-5"
                rounded
                alt="nf-image"
              />
          </div>
        </div>
      )
}

export default NotFoundPage