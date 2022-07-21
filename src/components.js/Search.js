import React from 'react'


const Search = ({ handleInput, query, search }) => {
    
  return (
    <div className='search-box'>
        <input 
        type="text" 
        className= "search-bar"
        placeholder='Search for movie...'
        onChange={handleInput}
        value={query}
        onKeyPress={search}
        />
    </div>
  )
}

export default Search