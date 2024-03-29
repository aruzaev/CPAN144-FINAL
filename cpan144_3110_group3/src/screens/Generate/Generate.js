import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation hooks
import handleSearch from "../../components/Global/unsplashAPI/unsplash";
import "./Generate.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Generate = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const query = useQuery();
  const [term, setTerm] = useState(query.get("search") || '');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (term) {
      handleSearch(term, setImages);
    }
  }, [term]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchTerm.value;
    setTerm(searchValue);
    navigate(`?search=${searchValue}`);
  };

  return (
    <div className="generate-box-main">
      <h1>Generate</h1>
      <div className="image-box">
        {images.map((image) => (
          <img key={image.id} src={image.urls.regular} alt="random" />
        ))}
      </div>
      <form onSubmit={handleButtonClick}>
        <div className="input-box">
          <input
            id="searchTerm"
            type="text"
            placeholder="Search for images..."
            defaultValue={term}
          />
          <br />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Generate;
