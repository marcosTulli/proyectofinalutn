import React from "react";
import CartStore from "../../../utils/CartStore";
import { useNavigate } from "react-router-dom";

const EventListItem = ({ event }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card my-3">
        <div className="card-thumbnail">
          <img
            className="img-fluid"
            src={event.imgUrl}
            alt="Cover"
            onClick={handleClick}
          />
        </div>
        <div className="card-body">
          <h3 className="card-title">{event.artist}</h3>
          <p className="card-text">Date: {event.date}</p>
          <p className="card-text">Price: ${event.price}</p>
          <button
            type="button"
            className="btn btn-primary btn-primary-themed btn-md font-upper"
            onClick={() => CartStore.dispatch({ type: "add", payload: event })}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventListItem;
