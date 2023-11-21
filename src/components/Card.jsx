import React from "react";
import { Link } from "react-router-dom";

const Card = ({ paper }) => {
    
  return (
    <div key={paper.id} className="col-md-3 mb-4">
      <div className="card position-relative">

        <img src={paper.image} className="card-img-top" alt="Product" />
        <div className="position-absolute top-0 end-0 mt-3 me-3">
        <Link to={`/preview/${paper.id}`}>
          <button className="btn btn-sm btn-warning animate-pulse">
            Preview
          </button>
          </Link>
        </div>

        <div className="card-body">
          <p className="card-text font-weight-bold">{paper.name}</p>
          <p className="card-text">{paper.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-dark">Add to Cart</button>
            <span className="font-weight-bold">৳ {paper.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
