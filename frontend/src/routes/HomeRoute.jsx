import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  const {photos, topics} = props;
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos}/>
    
    </div>
  );
};

export default HomeRoute;
