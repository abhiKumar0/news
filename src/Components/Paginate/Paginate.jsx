import { ArrowDownward, ArrowDropDown, ExpandMore, KeyboardDoubleArrowLeftSharp, KeyboardDoubleArrowRightSharp } from '@mui/icons-material';
import React from 'react';
import { Circles } from 'react-loader-spinner';

import "./Paginate.scss";


const Paginate = ({ page, setPage, miniLoading, updatedNewsArticles }) => {


  const addArticles = () => {
    setPage(page + 1)
    updatedNewsArticles();
  }
  console.log(page)

  return (
    <div className="news__paginate">
      <div className="news__paginate-btn">
        {/* <button onClick={addArticles}>More <ExpandMore /> </button> */}
        <button onClick={addArticles}>
        {miniLoading ?  
        <Circles
        color="#001493"
        height={25}
        width={50}
        className="circle"
        /> : <> More <ExpandMore /></> }
        </button>
        <hr />
      </div>
    </div>
  )
}

export default Paginate