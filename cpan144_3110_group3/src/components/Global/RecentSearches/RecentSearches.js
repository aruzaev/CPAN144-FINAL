import React from "react";
// import { Link } from "react-router-dom";
import "./RecentSearches.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const getRecentSearches = () => {
  const recentSearches = JSON.parse(sessionStorage.getItem('recentSearches')) || [];
  console.log(recentSearches)
  return recentSearches;
};

const getTimeElapsed = (timestamp) => {
  const now = new Date();
  const searchTime = new Date(timestamp);
  const seconds = Math.floor((now - searchTime) / 1000);

  if (seconds < 60) {
    return `few seconds ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
};

export { getRecentSearches, getTimeElapsed };