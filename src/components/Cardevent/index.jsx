import React from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/img/avatarevent.png";

function CardEvent(props) {
  const navigate = useNavigate();
  //   console.log(props);

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventid}`);
  };
  return (
    <main className="container d-flex gap-3">
      <div className="card" style={{ width: "18rem" }} onClick={handleDetail}>
        <img
          className="card-img-top"
          src={`https://res.cloudinary.com/maderisza/image/upload/v1663492332/${props.data.image}`}
          alt="Card image cap"
        />
        <div className="card-body">
          {/* <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.category}</p>
          <a href="#" className="btn btn-primary" onClick={handleDetail}>
            Go somewhere
          </a> */}
          <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
            <h6 className="card-title text-white">{props.data.name}</h6>
            <p className="card-text text-white">{props.data.category}</p>
            <img src={avatar} alt="" className="crdava" />
          </div>
        </div>
      </div>
    </main>
  );
}
export default CardEvent;
