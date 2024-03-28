import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import handleSearch from "../../components/Global/unsplashAPI/unsplash";
import "./Generate.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Generate = () => {
  const [images, setImages] = useState([]);
  const query = useQuery();
  const searchTerm = query.get("search"); // Get the search term from query parameters

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm, setImages);
    }
  }, [searchTerm]); // Rerun the search when searchTerm changes

  return (
    <div className="generate-box-main">
      <h1>Generate</h1>
      <div className="image-box">
        {images.map((image) => (
          <img key={image.id} src={image.urls.regular} alt="random" />
        ))}
      </div>
    </div>
  );
};

export default Generate;
