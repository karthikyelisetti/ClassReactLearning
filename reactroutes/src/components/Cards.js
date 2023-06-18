import React from "react";
import "../css/Cards.css";

export default function Cards(props) {
  return (
    <div className="card mt-5 mb-3" style={{ width: "18rem" }}>
      <img
        src={props.image}
        className="card-img-top"
        style={{ width: "286px", height: "180px" }}
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="btn-product">
      <button className="me-3">Add to cart</button>
      <button className="me-3">View details</button>
      </div>
    </div>
  );
}
