import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`${props.data.eventid}`);
  };
  return (
    <div className="row">
      <div className="col col-md-2">
        <div className=" bg-warning border rounded-3 text-center">
          15
          <br />
          wed
        </div>
      </div>
      <div className="col col-md-10 bg-warning" onClick={handleDetail}>
        <h1>{props.data.name}</h1>
        <h5>location</h5>
        <h6>Date</h6>
        <img
          className="card-img-top"
          src={`https://res.cloudinary.com/maderisza/image/upload/v1663492332/${props.data.image}`}
          alt="Card image cap"
        />
        <button className="btn text-primary">Detail</button>
        <button className="btn text-success">Update</button>
        <button className="btn text-danger">Delete</button>
      </div>
    </div>
  );
}
