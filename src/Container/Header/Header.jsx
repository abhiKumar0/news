import React from 'react';

import { Card, Hero } from "../../Components";
import "./Header.scss";

const Header = ({ articles }) => {
  return (
    <div className="news__header">
      <div className="news__header-container">
        <h1>Top Stories</h1>
        <Hero articles={articles} />
        <div className="news__header-cards">
          {articles.slice(1,4).map((article) => (
            <Card article={article} key={article.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header