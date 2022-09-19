import React from 'react';

import "./Card.scss"

const Card = ({ article }) => {
  return (
    <a href="#" className="news__card">
        <img src={article?.urlToImage} alt="" />
        <div className="news__card-content">
            <div>
                <h3 className="card-title">{article?.title?.length > 80 ? article?.title?.slice(0,80).concat("...") : article?.title}</h3>
                <p className="card-desc">{article?.description?.length > 150 ? article?.description?.slice(0,150).concat("...") : article?.description}</p>
            </div>
            <span className="card-time">{new Date(article?.publishedAt).toLocaleString()}</span>
        </div>
    </a>
  )
}

export default Card;