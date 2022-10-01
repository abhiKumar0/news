import React, { useState, useEffect } from 'react';

import { Card, Hero, Spinner, NameBar } from "../../Components"


import "./News.scss"

const News = ({ loading, setLoading, country }) => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [sportArticles, setSportArticles] = useState([]);
    const [techArticles, setTechArticles] = useState([]);
    const [businessArticles, setBusinessArticles] = useState([]);

    const fetchNewsArticles = async () => {
      setLoading(true);
      let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&categories=general&locale=${country}`
      
  
      const data = await fetch(url);
      const parsedData = await data.json();
      setNewsArticles(parsedData.data);
      setLoading(false);
    }

    const fetchSportArticles = async () => {
      setLoading(true);
      let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&categories=sports&locale=${country}`
  
      const data = await fetch(url);
      const parsedData = await data.json();
      setSportArticles(parsedData.data);
      setLoading(false);
    }
    const fetchBusinessArticles = async () => {
      setLoading(true);
      let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&categories=business&locale=${country}`
  
      const data = await fetch(url);
      const parsedData = await data.json();
      setBusinessArticles(parsedData.data);
      setLoading(false);
    }
    const fetchTechArticles = async () => {
      setLoading(true);
      let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&categories=tech&locale=${country}`
  
      const data = await fetch(url);
      const parsedData = await data.json();
      setTechArticles(parsedData.data);
      setLoading(false);
    }

    useEffect(() => {
      fetchNewsArticles();
      fetchSportArticles();
      fetchBusinessArticles();
      fetchTechArticles();
    }, [country])

  return (
    <section>
        <div className="news__news news-section">
          <NameBar name="News" bgColor="yellow" link="general" />
          <div className="news__card-container">
            {!loading ? newsArticles.slice(1,4).map((article) => (
              <Card article={article} />
            )) : (
              <Spinner />
            )}
          </div>
        </div>
        
        <div className="news__sport news-section">
          <NameBar name="Sports" bgColor="#12f434" link="sports"  />
          <div className="news__card-container">
            {!loading ? sportArticles.slice(0,3).map((article) => (
              <Card article={article} />
            )) : (
              <Spinner />
            )}
          </div>
        </div>

        <div className="news-section news__business">
          <NameBar name="Business" bgColor="#1f1f1f" link="business"  />
          <Hero articles={businessArticles} />
          <div className="news__card-container">
            {!loading ? businessArticles.slice(1,4).map((article) => (
              <Card article={article} />
            )) : (
              <Spinner />
            )}
          </div>
        </div>

        <div className="news__tech news-section">
          <NameBar name="Tech" bgColor="blue" link="technology"  />
          <div className="news__card-container">
            {!loading ? techArticles.slice(0,3).map((article) => (
              <Card article={article} />
            )) : (
              <Spinner />
            )}
          </div>
        </div>

    </section>
  )
}

export default News;