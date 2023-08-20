import {React, useState} from 'react';
import './App.scss';
import './styles/PhotoList.scss'
import photos from '../src/mocks/photos';
import topics from '../src/mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {
  //keep passing setModalVisible till photoListItem and toggle there
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  return (
    <div className="App">
       <HomeRoute photos={photos} topics={topics} setModalVisible={setModalVisible}
        setSelectedPhoto={setSelectedPhoto}/>
       {modalVisible && <PhotoDetailsModal setModalVisible={setModalVisible} 
       photos={photos} selectedPhoto={selectedPhoto}/>}
    </div>
  );
};

export default App;
