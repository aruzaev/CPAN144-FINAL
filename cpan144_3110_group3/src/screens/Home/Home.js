import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import fetchImages from "../../components/Global/unsplashAPI/unsplash_popular";

function Home() {
  const [images, setImages] = useState([]);
  const imageLength = 540;
  const imageWidth = 960;
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchImages().then((data) => {
      setImages(data);
    });
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    let intervalId;

    const scroll = () => {
      if (slider) {
        slider.scrollLeft += 600; //Scrolling speed here
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          clearInterval(intervalId);
          intervalId = setInterval(scroll, 0);
          setImages((prevImages) => [...prevImages, ...prevImages]);
        }
      }
    };
    intervalId = setInterval(scroll, 0);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="main-content">
      <h2>Popular Wallpapers</h2>
      <div className="slider-container" ref={sliderRef}>
        <div className="slider">
          {images.map((image, index) => (
            <div key={index} className="wp-slide">
              <img
                src={image.urls.regular}
                height={imageLength}
                width={imageWidth}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
