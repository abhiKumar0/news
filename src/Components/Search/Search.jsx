import { SearchSharp } from '@mui/icons-material'
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import "./Search.scss"

const Search = ({ setSearchQuery, fetchSearchedArticles, setPage }) => {
  const [searchInput, setSearchInput ] = useState("");

  const navigate = useNavigate();

  

  const  handleClick = () => {
    navigate("/search");
    setSearchQuery(searchInput);
    setPage(1);
    if (searchInput.length > 0) {
      fetchSearchedArticles();
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