import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const Card = ({ paper }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(paper));
    toast.success("Added to cart");
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Removed item from cart");
  };

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
            {cart.some((item) => item.id === paper.id) ? (
              <button
                onClick={() => remove(paper.id)}
                className="btn btn-danger"
              >
                Remove Item
              </button>
            ) : (
              <button onClick={add} className="btn btn-dark">
                Add to Cart
              </button>
            )}
            {/* <button className="btn btn-dark">Add to Cart</button> */}
            <span className="font-weight-bold">৳ {paper.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
