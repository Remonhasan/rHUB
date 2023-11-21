import React from 'react'
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
    const cart = useSelector((state) => state.cart);
    
    return (
        <div className='mt-3'>
            <nav className="navbar navbar-expand-lg navbar navbar-light nav-section">
                <a className="navbar-brand" href="#">rHUB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Latest Papers</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Topics
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">ECG</a>
                                <a className="dropdown-item" href="#">EEG</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Deep Learning</a>
                            </div>
                        </li>
                        
                        <Link to="/cart">
                            <div className="relative">
                                <a className="nav-link" href="#">
                                <FaShoppingCart className="text-xl" />
                                {cart.length > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge bg-success rounded-pill">
                                    {cart.length}
                                    </span>
                                )}
                                </a>
                        </div>
                       </Link>
                      
                        
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
