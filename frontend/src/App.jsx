import React from 'react';
import './App.scss';
import './styles/PhotoList.scss'
import photos from '../src/mocks/photos';
import topics from '../src/mocks/topics';
import HomeRoute from 'routes/HomeRoute';



// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
       <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
