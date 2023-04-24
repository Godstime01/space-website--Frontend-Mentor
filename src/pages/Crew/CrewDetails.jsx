import React from 'react';
import "./crew.css"

const CrewDetails = ({ data }) => {
    return (
        <div className='crew__grid'>
            <div className='crew__text'>
                <h3>{data.role}</h3>
                <h2>{data.name}</h2>
                <p>{data.bio}</p>
            </div>
            <div className='crew__image'>
                <img src="https://hips.hearstapps.com/hmg-prod/images/30th-anniversary-of-apollo-11-landing-on-the-moon-astronaut-news-photo-51098545-1547940625.jpg" alt="" />
            </div>
        </div>
    )
}

export default CrewDetails