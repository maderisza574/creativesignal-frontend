import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventid}`);
  };

  // const showDataImage = `https://res.cloudinary.com/maderisza/image/upload/v1663492332/${props.data.image}`;
  return (
    <div className="row">
      <div className="col col-md-2">
        <div className=" bg-warning border rounded-3 text-center">
          15
          <br />
          wed
        </div>
      </div>
      <div className="col col-md-10 bg-warning">
        <h1>title {props.data.name}</h1>
        <h5>category{props.data.category}</h5>
        <h6>Date</h6>
        {/* <img
          className="card-img-top"
          src={`https://res.cloudinary.com/maderisza/image/upload/v1663492332/${props.data.image}`}
          alt="Card image cap"
        /> */}

        <button className="btn text-primary" onClick={handleDetail}>
          Detail
        </button>
        {/* {props.manageEvent ? ( */}
        <>
          <button
            className="btn btn-secondary"
            onClick={() => props.setUpdate()}
          >
            Update
          </button>
          <button className="btn btn-danger">Delete</button>
        </>
        {/* ) : (
          ""
        )} */}
      </div>
    </div>
  );
}
