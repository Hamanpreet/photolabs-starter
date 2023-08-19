import React, { useState } from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const title = props.title;
  const [hover, setHover] = useState(false);

  //change style when hover 
  return (
    <div className="topic-list__item">
      {/* Insert React */}
        <span onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
         className={hover ? 'hover' : ''}>{title}</span>
    </div>
  );
};

export default TopicListItem;
