import { SearchSharp } from '@mui/icons-material'
import React, { useState, useEffect} from 'react';

import "./Search.scss"

const Search = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput ] = useState("");
  
  return (
    <div className="news__search">
        <input type="text" placeholder="Search News" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button type="submit">
            <SearchSharp fontSize="large" onClick={() => setSearchQuery(searchInput)} />
        </button>
    </div>
  )
}

export default Search