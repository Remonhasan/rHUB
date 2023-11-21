import React from "react";

const PreviewCard = ({ paper }) => {
  console.log(paper);
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={paper.image} alt="paper" className="img-fluid mb-3" />
        </div>
        <div className="col-md-6">
          <div className="text-gray-500">
            <small>{paper.category}</small>
            <h3 className="text-black text-uppercase fw-bold">{paper.name}</h3>
            <h3 className="text-black mb-4">৳ {paper.price}</h3>
            <small className="text-black text-sm">{paper.description}</small>
            <div className="gap-2 mt-4">
              <button
                id="addToCartButton"
                className="btn btn-dark text-uppercase px-4 py-2"
                // onClick={add}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
