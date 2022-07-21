import React from 'react';

const api_img =  'https://image.tmdb.org/t/p/w1280/';

const Feature = ({feature}) => {
  return (
    <div className='feature'>

      <img src={api_img + feature.backdrop_path} alt={feature.title} />

      <div className="info">
        <h3 className='title'>{feature.title}</h3>
        <span className="ratings"><h3>{feature.vote_average}</h3></span>
      </div>

      <div className="overview">
        <h3>Overview: </h3>
        <p>{feature.overview}</p>
        <p><span className='release-date'>Realease Date:</span> {feature.release_date}</p>
      </div>
        
    </div>
  )
}

export default Feature