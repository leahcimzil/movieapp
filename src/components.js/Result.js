import React from 'react'


const api_img =  'https://image.tmdb.org/t/p/w1280/';

const Result = ({result}) => {
  return (
    <div className='result'>
      <img src={api_img + result.backdrop_path} alt={result.title} />
        
      <div className="info">
      <h3 className='title'>{result.title}</h3>
      <span className="ratings"><h3>{result.vote_average}</h3></span>
      </div>

      <div className="overview">
        <h3>Overview: </h3>
        <p>{result.overview}</p>
        <p><span className='release-date'>Realease Date:</span> {result.release_date}</p>
      </div>

    </div>
  )
}

export default Result