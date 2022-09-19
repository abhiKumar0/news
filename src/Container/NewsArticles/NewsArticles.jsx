import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';

import Search from '../../Components/Search/Search';
import "./NewsArticles.scss";

const NewsArticles = ({ loading, setLoading }) => {
  let { category } = useParams();

  const [newsArticles, setNewsArticles] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState("");
 

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
      let url = `https://newsapi.org/v2/evrything?q=${searchQuery}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`

      const data = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
      });
      const parsedData = await data.json();

      setNewsArticles(parsedData.articles);
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