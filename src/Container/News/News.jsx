import React, { useState, useEffect } from 'react';

import { Card, Hero, HorizontalScroll, NameBar } from "../../Components"


import "./News.scss"

const News = ({ loading, setLoading }) => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [sportArticles, setSportArticles] = useState([]);
    const [techArticles, setTechArticles] = useState([]);
    const [businessArticles, setBusinessArticles] = useState([]);

    const fetchNewsArticles = async () => {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
  
      const data = await fetch(url);
      // console.log(data)
      const parsedData = await data.json();
      setNewsArticles(parsedData.articles);
      setLoading(false);
    }

    const fetchSportArticles = async () => {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
  
      const data = await fetch(url);
      // console.log(data)
      const parsedData = await data.json();
      setSportArticles(parsedData.articles);
      setLoading(false);
    }
    const fetchBusinessArticles = async () => {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
  
      const data = await fetch(url);
      // console.log(data)
      const parsedData = await data.json();
      setBusinessArticles(parsedData.articles);
      setLoading(false);
    }
    const fetchTechArticles = async () => {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
  
      const data = await fetch(url);
      // console.log(data)
      const parsedData = await data.json();
      setTechArticles(parsedData.articles);
      setLoading(false);
    }

    useEffect(() => {
      fetchNewsArticles();
      fetchSportArticles();
      fetchBusinessArticles();
      fetchTechArticles();
    }, [])

  return (
    <section>
        <div className="news__news news-section">
          <NameBar name="News" bgColor="yellow" link="general" />
          <div className="news__card-container">
            {!loading ? newsArticles.slice(0,3).map((article) => (
              <Card article={article} />
            )) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
        
        <div className="news__sport news-section">
          <NameBar name="Sports" bgColor="#12f434" link="sports"  />
          <div className="news__card-container">
            {!loading ? sportArticles.slice(0,3).map((article) => (
              <Card article={article} />
            )) : (
              <h1>Loading...</h1>
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
              <h1>Loading...</h1>
            )}
          </div>
        </div>

        <div className="news__tech news-section">
          <NameBar name="Tech" bgColor="blue" link="technology"  />
          <div className="news__card-container">
            {!loading ? techArticles.slice(0,3).map((article) => (
              <Card article={article} />
            )) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>

        <HorizontalScroll articles={newsArticles} />
    </section>
  )
}

export default News;