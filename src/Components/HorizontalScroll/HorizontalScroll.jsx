import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import Card from '../Card/Card';

import "./HorizontalScroll.scss";

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </div>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </div>
    );
  }

const HorizontalScroll = ({ articles }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {articles.map((article, i) => (
        <Card article={article} key={i} />
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScroll