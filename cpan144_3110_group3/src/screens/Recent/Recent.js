import React, { useState } from "react";
import "./recent.css"
import { getRecentSearches, getTimeElapsed } from "../../components/Global/RecentSearches/RecentSearches";

const RecentSearches = () => {
  const recentSearches = getRecentSearches();
  const [modalContent, setModalContent] = useState(null);

  const openModal = (search) => {
    setModalContent(search);
    document.body.classList.add('modal-open'); // Add class to body to prevent scrolling
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.classList.remove('modal-open'); // Remove class from body to enable scrolling
  };

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
              <div className="card border border-4">
                <img src={search.imageUrl} className="card-img-top"
                  height={540}
                  width={960}
                  style={{ objectFit: "cover" }} alt={search.searchTerm} />
                <div className="card-body" >
                  <h5 className="card-title">Search term: {search.searchTerm}</h5>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => openModal(search)}>
                    View
                  </button>
                  <p className="text-muted">{getTimeElapsed(search.timestamp)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalContent && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <img src={modalContent.imageUrl} className="img-fluid" alt={modalContent.searchTerm} />
                <p>Search term: {modalContent.searchTerm}</p>
                <p>Timestamp: {getTimeElapsed(modalContent.timestamp)}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentSearches;
