import React from "react";

const Card = ({ paper }) => {
 
  return (
    <div key={paper.id} className="col-md-3 mb-4">
      <div className="card">
        <img src={paper.image} className="card-img-top" alt="Product" />
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
