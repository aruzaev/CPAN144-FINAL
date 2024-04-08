import React from "react";
// import { Link } from "react-router-dom";
import "./RecentSearches.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


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
    // <div className="container mt-5">
    //   <h1>Views</h1>
    //   <div className="row">
    //     {recentSearches.map((search, index) => (
    //       <div key={index} className="col-md-4">
    //         <div className="card" style={{ width: '18rem' }}>
    //           <img src={search.imageUrl} className="card-img-top" alt={search.searchTerm} />
    //           <div className="card-body">
    //             <h5 className="card-title">Search term: {search.searchTerm}</h5>
    //             <div className="btn-group">
    //               <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
    //               <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
    //             </div>
    //             <p className="text-muted">{getTimeElapsed(search.timestamp)}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="mt-5 ">
      <div className="container-lg">
        <div className="text-center">
          <h2>Recent Photos</h2>
          <p>View Your Past Searches Here</p>
        </div>
        <div className="row align-items-center justify-content-center">
          {recentSearches.map((search, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
              <div className="card border border-4" style={{ height: '' }}>
                <img src={search.imageUrl} className="card-img-top"
                  height={540}
                  width={960}
                  style={{ objectFit: "cover" }} alt={search.searchTerm} />
                <div className="card-body" >
                  <h5 className="card-title">Search term: {search.searchTerm}</h5>
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <p className="text-muted">{getTimeElapsed(search.timestamp)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default RecentSearches;
