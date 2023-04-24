import React from 'react';
import "./technology.css";

const TechDetails = ({ data }) => {
  return (
    <div className='grid'>

        <div className='text'>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
        </div>
        <div className='image'>
          <img src="https://hips.hearstapps.com/hmg-prod/images/30th-anniversary-of-apollo-11-landing-on-the-moon-astronaut-news-photo-51098545-1547940625.jpg" alt="" />
        </div>
    </div>
  )
}

export default TechDetails