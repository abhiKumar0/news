import React from 'react';

import "./Hero.scss"

const Hero = ({ articles }) => {
  return (
    <a href={articles[0]?.url} target="_blank" className="news__hero">
        <img src={articles[0]?.image_url} alt="" />
        <div className="news__hero-content">
            <div>
                <h3 className="card-title">{articles[0]?.title?.length > 80 ? articles[0]?.title.slice(0,70).concat("...") : articles[0]?.title}</h3>
                <p className="card-desc">{articles[0]?.description?.length > 150 ? articles[0]?.description.slice(0,150).concat("...") : articles[0]?.description}</p>
            </div>
            <span className="card-time">{new Date(articles[0]?.published_at).toLocaleString()}</span>
        </div>
    </a>
  )
}

export default Hero;
