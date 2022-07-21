import React from 'react';
import Feature from './Feature';

const Features = ({features, pageCount, nextPage, prevPage }) => {
  return (
    <>
    <h1 className='trending'>Trending</h1>
    
    <div className='features'>
      {features.map(feature=> (
        <Feature key = {feature.id} feature = {feature} />
      ))}
    </div>

    <div className="pagination">
        <button onClick={prevPage} className={(pageCount === 1)? "disabled":''}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>

    </>
  )
}

export default Features