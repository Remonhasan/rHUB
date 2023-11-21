import React from "react";
import items from "../../data";
import Card from "../Card";
import Footer from "./Footer";

export default function Paper() {
  return (
    <div className="container mt-4">
      <div className="row mt-3 mb-10">

        {items.map((item, idx) => (
          <Card key={item.id} paper={item} />
        ))}
        
      </div>
      <Footer/>
    </div>
  );
}
