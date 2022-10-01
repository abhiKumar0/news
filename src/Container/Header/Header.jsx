import React, { useState, useEffect } from 'react';

import { Hero } from "../../Components";
import "./Header.scss";

const Header = ({ country }) => {

  const [articles, setArticles] = useState([]);

  
  const fetchArticles = async () => {
    let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&categories=general&locale=${country}`;

    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.data)
  }
  
  useEffect(() => {
    fetchArticles();
  }, [country])


  return (
    <div className="news__header">
      <div className="news__header-container">
        <h1>Top Stories</h1>
        <Hero articles={articles} />
      </div>
    </div>
  )
}

export default Header