import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const {topics, favoritedPhotos, toggleShowFav, showFav, selectedTopicId, photoTopicData} = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} selectedTopicId={selectedTopicId} photoTopicData={photoTopicData}/>
      <FavBadge toggleShowFav={toggleShowFav} showFav={showFav} isFavPhotoExist={favoritedPhotos.length > 0}/>

    </div>
  )
}

export default TopNavigation;