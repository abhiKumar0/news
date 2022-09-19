import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@mui/icons-material';

import "./NameBar.scss"

const NameBar = ({ name, bgColor, link }) => {
  return (
    <div className="news__bar">
        <div className="news__bar-name">
            <div style={{backgroundColor: bgColor}} />
            <h3 className="news-heading">{name}</h3>
        </div>
        <Link to={`/category-${link}`} className="news__bar-content">
            <h4>More</h4>
            <ArrowRight />
        </Link>
    </div>
  )
}

export default NameBar