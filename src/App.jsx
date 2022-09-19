import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.scss";
import { Footer, Navbar } from './Components';

import { Header, News, NewsArticles } from "./Container";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(true);


  // let url = `https://newsapi.org/v2/everything?q=Apple&from=2022-09-11&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`

  const fetchArticles = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`

    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
  }
  
  useEffect(() => {
    fetchArticles();
  }, [])

  return (
      <Router>
        <div className={`app ${dark ? "dark" : ""}`}>
          <Navbar setDark={setDark} dark={dark} />
            <Routes>
              <Route path="/" element={
                <>
                <Header articles={articles} />
                <News loading={loading} setLoading={setLoading} />
                </>
              } />
              <Route path="/category-:category" element={
                <NewsArticles loading={loading} setLoading={setLoading}  />
              } />

              <Route path="/search" element={
                <NewsArticles loading={loading} setLoading={setLoading} />
              } />
            </Routes>
          <Footer />
        </div>
      </Router>
  )
}

export default App