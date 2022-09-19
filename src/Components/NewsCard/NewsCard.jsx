import React from 'react'

import image from './goodbrief.png'

const article = {
  urlToImage: image,
  title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis nesciunt quae nemo atque architecto officiis explicabo itaque molestiae? Consequuntur dolor nam itaque hic.",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nulla sapiente aut odio quae, architecto totam neque nisi magni ullam iste quam quod!",
  publishedAt: "2022-09-18 08:47 PM"
}

const NewsCard = ({  }) => {
  return (
    <a href="#" className="news__card">
        <img src={article?.urlToImage} alt="" />
        <div className="news__card-content">
            <div>
                <h3 className="card-title">{article?.title?.length > 60 ? article?.title?.slice(0,60).concat("...") : article?.title}</h3>
                <p className="card-desc">{article?.description?.length > 150 ? article?.description?.slice(0,150).concat("...") : article?.description}</p>
            </div>
            <span className="card-time">{new Date(article?.publishedAt).toLocaleString()}</span>
        </div>
    </a>
  )
}

export default NewsCard