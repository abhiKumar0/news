import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.scss";
import { CountryModal, Footer, Navbar } from './Components';

import { Header, News, NewsArticles } from "./Container";

import { fetchData, options } from "./fetch";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);
  const [country, setCountry] = useState("in");
  const [isOpen, setIsOpen] = useState(false);






  const fetchArticles = async () => {
    let url = `https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API_KEY}&categories=general&locale=${country}`
    

    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.data)
  }
  
  useEffect(() => {
    fetchArticles();
  }, [country])

  return (
      <Router>
        <div className={`app ${dark ? "dark" : ""}`}>
          <Navbar setDark={setDark} dark={dark} setIsOpen={setIsOpen} />
          <CountryModal isOpen={isOpen} setIsOpen={setIsOpen} country={country} setCountry={setCountry} />
            <Routes>
              <Route path="/" element={
                <>
                <Header articles={articles}  />
                <News loading={loading} setLoading={setLoading} country={country} />
                </>
              } />
              <Route path="/category-:category" element={
                <NewsArticles loading={loading} setLoading={setLoading} country={country} />
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