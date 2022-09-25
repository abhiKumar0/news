import { SearchSharp } from '@mui/icons-material'
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import "./Search.scss"

const Search = ({ setSearchQuery, fetchSearchedArticles, fetchSearchedArticles2 }) => {
  const [searchInput, setSearchInput ] = useState("");

  const navigate = useNavigate();

  

  const  handleClick = () => {

    setSearchQuery(searchInput);

    if (searchInput.length > 0) {

      fetchSearchedArticles();
      fetchSearchedArticles2();
    }
      
    }
  
  return (
    <div className="news__search">
        <input type="text" placeholder="Search News" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button type="submit">
            <SearchSharp fontSize="large" onClick={handleClick} />
        </button>
    </div>
  )
}

export default Search