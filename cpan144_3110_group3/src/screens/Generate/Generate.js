import React, { useState } from "react";
import handleSearch from "../../components/Global/unsplashAPI/unsplash";
import "./Generate.css";

const Generate = () => {
  const [term, setTerm] = useState('');
  const [images, setImages] = useState([]);

  const handleButtonClick = () => {
    handleSearch(term, setImages);
  };

  return (
    <div className="generate-box-main">
      <h1>Generate</h1>
      <div className="image-box">
        {images.map((image) => (
          <img key={image.id} src={image.urls.regular} alt="random" />
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Search for images..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <br />
        <button onClick={handleButtonClick}>Find</button>
      </div>

    </div>
  );
};

export default Generate;