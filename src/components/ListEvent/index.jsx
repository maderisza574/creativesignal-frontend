import React from "react";
// import { useNavigate } from "react-router-dom";

export default function ListEvent() {
  // const navigate = useNavigate();

  // const handleDetail = () => {
  //   navigate(`${prop);
  // };
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
        <h1>Title</h1>
        <h5>location</h5>
        <h6>Date</h6>

        <button className="btn text-primary">Detail</button>
        <button className="btn text-success">Update</button>
        <button className="btn text-danger">Delete</button>
      </div>
    </div>
  );
}
