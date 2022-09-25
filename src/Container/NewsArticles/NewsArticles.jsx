import React,{ useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Card, Paginate, Search, Spinner } from "../../Components"
import "./NewsArticles.scss";


let catAry = ['general'];

const NewsArticles = ({ loading, setLoading, country }) => {
  let { category } = useParams();
  let location = useLocation().pathname;
  

  
  const [newsArticles, setNewsArticles] = useState([]);
  const [newsArticles2, setNewsArticles2] = useState([]);
  const [searchQuery, setSearchQuery ] = useState('');
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(2);

  
 
 
  
        if (category !== undefined) {
          catAry.push(category);
        }

  
  useEffect(() => {

    const fetchNewsArticles = async () => {
      setLoading(true);
      let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&categories=${catAry[catAry.length - 1]}&locale=${country}&page=${page1}`;
      

      const data = await fetch(url);
      const parsedData = await data.json();


      setNewsArticles(parsedData.data);
      setLoading(false);
    }

    const fetchNewsArticles2 = async () => {
      setLoading(true);
      let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&categories=${catAry[catAry.length - 1]}&locale=${country}&page=${page2}`;
      

      const data = await fetch(url);
      const parsedData = await data.json();


      setNewsArticles2(parsedData.data);
      setLoading(false);
    }

    fetchNewsArticles();
    fetchNewsArticles2();
    

  }, [catAry[catAry.length - 1], country], page1, page2);

  const fetchSearchedArticles = async () => {
    setLoading(true)
    let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&search=${searchQuery}&locale=${country}&page=${page1}`
    
    const data = await fetch(url);
    const parsedData = await data.json();
    setNewsArticles(parsedData.data)
    setLoading(false);
  }

  const fetchSearchedArticles2 = async () => {
    setLoading(true)
    let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&search=${searchQuery}&locale=${country}&page=${page2}`
    
    const data = await fetch(url);
    const parsedData = await data.json();
    setNewsArticles2(parsedData.data);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchSearchedArticles();
    fetchSearchedArticles2();

  }, [searchQuery, page1, page2])

  
  
 



  return (
    <div className="news__newsArticles">
      <div className="news__newsArticles-search">
        <Search setSearchQuery={setSearchQuery} fetchSearchedArticles={fetchSearchedArticles} fetchSearchedArticles2={fetchSearchedArticles2} />
      </div>
      <div className="news__newsArticles-cards">
        <div className="news__newsArticles-cards-container">
          {!loading ? newsArticles?.map((article, i) => (
            <Card article={article} key={i} />
          )) : (
            <Spinner />
          )}
          {!loading ? newsArticles2?.map((article, i) => (
            <Card article={article} key={i} />
          )) : (
            <div></div>
          )}
        </div>
      </div>
      <Paginate />
    </div>
  )
}

export default NewsArticles