import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, selectedTopicId, photoTopicData } = props;
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((el) => {
        return (
          <TopicListItem
            topic={el}
            key={el.id}
            selectedTopicId={selectedTopicId}
            photoTopicData={photoTopicData}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
