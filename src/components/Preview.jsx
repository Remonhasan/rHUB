import React from "react";
import PreviewCard from "./PreviewCard";
import Data from "../data";
import { useParams } from "react-router-dom";

export default function Preview() {

  const { id } = useParams();
  const paperId = Number(id);

  const qtyUpdate = Data.map((item) => {
    return { ...item, qty: 1 };
  });

  const items = qtyUpdate.filter((item) => item.id === paperId);
  const paper = items[0];

  return (
    <div className="">
      <PreviewCard paper={paper} />
    </div>
  );
}
