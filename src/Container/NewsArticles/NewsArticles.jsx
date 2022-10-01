import React,{ useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Card, Paginate, Search, Spinner } from "../../Components"
import "./NewsArticles.scss";



const NewsArticles = ({ loading, setLoading, country, page, setPage, catAry }) => {
  
  let { category } = useParams();
  let location = useLocation().pathname;
  

  
  const [newsArticles, setNewsArticles] = useState([]);
  const [searchQuery, setSearchQuery ] = useState('');
  const [results, setResults] = useState(0);

  
 
 
  
  if (category !== undefined) {
    catAry.push(category);
  }
  
  const fetchNewsArticles = async () => {
    setLoading(true);
    let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&categories=${catAry[catAry.length - 1]}&locale=${country}&page=${page}`;
          
    
    const data = await fetch(url);
    const parsedData = await data.json();
    setResults(parsedData.meta.found)
    setNewsArticles(parsedData.data);
    setLoading(false);
  }


  const fetchSearchedArticles = async () => {
    
    setLoading(true)
    let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&search=${searchQuery}&locale=${country}&page=${page}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setResults(parsedData.meta.found)
    setNewsArticles(parsedData.data)
    setLoading(false);
  }

  
  useEffect(() => {
    if (location === `/category-${catAry[catAry.length - 1]}`) {
      fetchNewsArticles();
      
    } else if (location === "/search") {
      fetchSearchedArticles();
    }
  }, [catAry[catAry.length - 1], country, searchQuery, page])


 



  return (
    <div className="news__newsArticles">
      <div className="news__newsArticles-search">
        <Search setSearchQuery={setSearchQuery} setPage={setPage} fetchSearchedArticles={fetchSearchedArticles} />
      </div>
      <div className="news__newsArticles-cards">
        <div className="news__newsArticles-cards-container">
          {!loading ? newsArticles?.map((article, i) => (
            <Card article={article} key={i} />
          )) : (
            <Spinner />
          )}
        </div>
      </div>
      <Paginate page={page} setPage={setPage} results={results} />
    </div>
  )
}

export default NewsArticles;