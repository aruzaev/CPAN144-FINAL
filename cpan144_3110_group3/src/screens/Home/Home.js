import React, { useEffect, useRef } from "react";
import "./Home.css";

function Home() {
  const wpRef = useRef(null);

  useEffect(() => {
    const copy = wpRef.current.cloneNode(true);
    wpRef.current.parentNode.appendChild(copy);
  }, []);

  return (
    <div className="main-content">
      <h2>Popular Wallpapers</h2>
      <div className="slider">
        <div className="wp-slide" ref={wpRef}>
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
