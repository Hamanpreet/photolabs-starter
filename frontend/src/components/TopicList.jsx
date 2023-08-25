import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

//mock data is imported in App and then passed on
// as props to every child
const TopicList = (props) => {
  const {topics} = props;
  return (
    <div className="top-nav-bar__topic-list">

      {topics.map((el) =>{
        return <TopicListItem topic={el} key={el.id}/>;
      })}
    </div>
  );
};

export default TopicList;
