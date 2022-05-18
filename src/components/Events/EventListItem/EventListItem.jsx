import React from "react";
import CartStore from "../../../utils/CartStore";
import { useNavigate } from "react-router-dom";

const EventListItem = ({ event }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <tr className="align-middle">
      <td>
        <img
          style={{ width: "60px" }}
          className="img-fluid max-100"
          src={event.imgUrl}
          alt="Cover"
          onClick={handleClick}
        />
      </td>
      <td className="max-50">{new Date(event.date).toLocaleString()}</td>
      <td className="max-50">{event.name}</td>
      <td className="max-50">{event.artist}</td>
      <td className="max-50">${event.price}</td>
      <td className="max-50">
        <button
          type="button"
          className="btn btn-primary btn-primary-themed btn-md font-upper"
          onClick={() => CartStore.dispatch({ type: "add", payload: event })}>
          Add to Cart
        </button>
      </td>
    </tr>
  );
};

export default EventListItem;
