import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card, Search } from "../../Components"
import "./NewsArticles.scss";

const NewsArticles = ({ loading, setLoading }) => {
  let { category } = useParams();

  const [newsArticles, setNewsArticles] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('india');
 

  useEffect(() => {

    const fetchNewsArticles = async () => {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`

      const data = await fetch(url);
      const parsedData = await data.json();

      setNewsArticles(parsedData.articles);
      setLoading(false)
    }

    fetchNewsArticles();
    

  }, [category])

  useEffect(() => {

    const fetchSearchedArticles = async () => {
      setLoading(true)
      let url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
      
      const data = await fetch(url, {
        method: 'GET',
        // mode: 'no-cors',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      });
      const parsedData = await data.json();
      setNewsArticles(parsedData.articles);
      console.log(newsArticles)
      setLoading(false);
    }

    fetchSearchedArticles();

  }, [searchQuery]);

  return (
    <div className="news__newsArticles">
      <div className="news__newsArticles-search">
        <Search setSearchQuery={setSearchQuery} />
      </div>
      <div className="news__newsArticles-cards">
        <div className="news__newsArticles-cards-container">
          {!loading ? newsArticles?.map((article, i) => (
            <Card article={article} key={i} />
          )) : (
            <h1>Loading..</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsArticles