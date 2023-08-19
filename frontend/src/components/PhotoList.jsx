import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";


const PhotoList = (props) => {
  const {photos} = props;

  return (
    <ul className="photo-list">
      {photos.map((el) =>{
        return <PhotoListItem {...el } key={el.id}/>;
      })}
      {/* <PhotoListItem {...sampleDataForPhotoListItem}/>
      <PhotoListItem {...sampleDataForPhotoListItem}/>
      <PhotoListItem {...sampleDataForPhotoListItem}/> */}
    </ul>
  );
};

export default PhotoList;
