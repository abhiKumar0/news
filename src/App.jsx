import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.scss";
import { CountryModal, Footer, Navbar } from './Components';
import { Header, News, NewsArticles } from "./Container";


let catAry = [''];

const App = () => {
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);
  const [country, setCountry] = useState("in");
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);







  return (
      <Router>
        <div className={`app ${dark ? "dark" : ""}`}>
          <Navbar setDark={setDark} dark={dark} setIsOpen={setIsOpen} setPage={setPage} catAry={catAry} />
          <CountryModal isOpen={isOpen} setIsOpen={setIsOpen} country={country} setCountry={setCountry} />
            <Routes>
              <Route path="/" element={
                <>
                <Header country={country}  />
                <News loading={loading} setLoading={setLoading} country={country} />
                </>
              } />
              <Route path="/category-:category" element={
                <NewsArticles loading={loading} setLoading={setLoading} country={country} page={page} setPage={setPage} catAry={catAry} />
              } />

              <Route path="/search" element={
                <NewsArticles loading={loading} setLoading={setLoading} country={country} page={page} setPage={setPage} catAry={catAry} />
              } />
            </Routes>
          <Footer />
        </div>
      </Router>
  )
}

export default App;