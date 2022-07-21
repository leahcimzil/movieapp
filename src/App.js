import React, { useState, useEffect } from 'react';
import Search from './components.js/Search';
import Results from './components.js/Results';
import Features from './components.js/Features';



const api = {
  key: 'a2b744d84ea1f7ad72ec5b1025915c53',
  featured: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=",
  search_link: 'https://api.themoviedb.org/3/search/movie?api_key=a2b744d84ea1f7ad72ec5b1025915c53&query='
}



function App() {

  const [features, setFeatures] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.search_link}${api.key}&query=${query}`)
        .then(res => res.json())
        .then(result => {
          setResults(result.results);
          setQuery('');
        })
    }
  }

  useEffect(() => {
    fetch(`${api.featured}1&api_key=${api.key}`)
      .then(res => res.json())
      .then((data) => {
        setFeatures(data.results);
        setPageCount(p => p + 1);
      });
  }, []);


  const handleInput = (e) => setQuery(e.target.value);

  const refreshPage = () => {
    window.location.reload(false);
  }

  const nextPage = () => {
    fetch(`${api.featured}${pageCount + 1}&api_key=${api.key}`)
      .then(res => res.json())
      .then((data) => {
        setFeatures(data.results);
        setPageCount(pageCount + 1);
      })
  }

  const prevPage = () => {
    fetch(`${api.featured}${pageCount - 1}&api_key=${api.key}`)
      .then(res => res.json())
      .then((data) => {
        setFeatures(data.results);
        setPageCount(pageCount - 1);
      })
  }


  return (
    <div className="app">

      <header>
        <h2 onClick={refreshPage} className='logo'>Movies</h2>
        <Search handleInput={handleInput} query={query} search={search} />
      </header>

      <main>
        {(results.length > 0) ? <Results results={results} /> :
          <Features
            features={features}
            pageCount={pageCount}
            nextPage={nextPage}
            prevPage={prevPage}
          />}
      </main>

    </div>
  );
}

export default App;
