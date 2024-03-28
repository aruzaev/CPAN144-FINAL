import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import handleSearch from "../../components/Global/unsplashAPI/unsplash";
import "./Generate.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Generate = () => {
  const query = useQuery();
  const [term, setTerm] = useState(query.get("search") || '');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (term) {
      handleSearch(term, setImages);
    }
  }, [term]);

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
