import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkoutCart } from "../../redux/slices/CartSlice";
import toast from "react-hot-toast";
import CartCard from "../CartCard";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
    );
  }, [cart]);

  const checkout = () => {
    toast.success("Order Placed Successfully");
    localStorage.removeItem("localCart");
    dispatch(checkoutCart());
    navigate("/");
  };

  return (
    <div className="container my-5 mx-3 md:mx-5">
      <div className="d-flex justify-content-center">
        <div className="row g-5">
          <div className="col-lg-6">
            {cart.map((cartItem) => (
              <CartCard key={cartItem.id} item={cartItem} />
            ))}
          </div>
          <div className="col-lg-6">
            {cart.length === 0 ? (
              <div className="d-flex flex-column justify-content-around align-items-center min-w-320px md:min-w-1280px md:max-h-100px">
                <div>
                  <h1 className="text-4xl md:text-6xl font-semibold">
                    Cart is Empty !!
                  </h1>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-dark">
                    <Link
                      to="/"
                      className="text-white text-decoration-none"
                    >
                      Shop Now
                    </Link>
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-200px mt-40px w-300px md:w-600px p-4 d-flex flex-column justify-content-between">
                <div>
                  <h1 className="text-xl md:text-4xl font-bold text-dark hover:text-slate-500">
                    TOTAL ITEMS : {cart.length}
                  </h1>
                  <h1 className="text-xl md:text-5xl font-bold text-slate-500">
                    TOTAL PRICE : ₹ {total}
                  </h1>
                </div>
                <div>
                  <button className="btn btn-dark w-100" onClick={checkout}>
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
