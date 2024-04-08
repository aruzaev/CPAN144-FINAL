import React from "react";
// import { Link } from "react-router-dom";
import "./RecentSearches.css";

const RecentSearches = ({ searches }) => {
  const recentSearches = JSON.parse(sessionStorage.getItem('recentSearches')) || [];
  console.log(recentSearches)
  const getTimeElapsed = (timestamp) => {
    const now = new Date();
    const searchTime = new Date(timestamp);
    const elapsedSeconds = Math.floor((now - searchTime) / 1000);

    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} seconds ago`;
    } else if (elapsedSeconds < 3600) {
      const minutes = Math.floor(elapsedSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (elapsedSeconds < 86400) {
      const hours = Math.floor(elapsedSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(elapsedSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className="container mt-5">
      <h1>Views</h1>
      <div className="row">
        {recentSearches.map((search, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={search.imageUrl} alt={search.searchTerm} />
              <div className="card-body">
                <p className="card-text">Search term: {search.searchTerm}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">{getTimeElapsed(search.timestamp)}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
