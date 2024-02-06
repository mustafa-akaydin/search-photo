import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SearchHeader from './SearchHeader';
import searchImages from './api.jsx';
import { useState } from 'react';
import ImageList from './components/ImageList.jsx';

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
