import { KeyboardDoubleArrowLeftSharp, KeyboardDoubleArrowRightSharp } from '@mui/icons-material';
import React from 'react';

import "./Paginate.scss";


const Paginate = ({ page, setPage, results }) => {


  
  const handlePrev = () => {
    setPage(page > 1 ? page - 1 : page);
  }
  
  
  const handleNext = () => {
    setPage(page < results - 1 ? page + 1 : results - 1);
    
  }


  return (
    <div className="news__paginate">
      <div className="news__paginate-btns">
        <button onClick={handlePrev}> <KeyboardDoubleArrowLeftSharp /> Prev </button>
        <button onClick={handleNext}>Next <KeyboardDoubleArrowRightSharp /></button>
      </div>
    </div>
  )
}

export default Paginate