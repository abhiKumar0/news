import React from 'react';
import { Circles } from 'react-loader-spinner';

import "./Spinner.scss"

const Spinner = () => {
  return (
    <div className='news__spinner '>
        <Circles
        color="#001493"
        height={50}
        width={200}
        className="circle"
        />
        <p>Loading...</p>
    </div>
  )
}

export default Spinner;