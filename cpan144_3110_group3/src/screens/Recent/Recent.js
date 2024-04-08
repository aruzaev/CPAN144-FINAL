import React from "react";
import { getRecentSearches, getTimeElapsed } from "../../components/Global/RecentSearches/RecentSearches";

const RecentSearches = () => {
  const recentSearches = getRecentSearches();

  return (
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
