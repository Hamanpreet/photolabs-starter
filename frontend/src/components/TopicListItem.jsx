import React, { useState } from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, selectedTopicId, photoTopicData }) => {
  const title = topic.title;
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    selectedTopicId = topic.id;
    photoTopicData(selectedTopicId);
  };

  //change style when hover
  return (
    <div className="topic-list__item">
      <span
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={hover ? "hover" : ""}>
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
