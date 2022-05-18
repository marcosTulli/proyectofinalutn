import React from "react";
import { useNavigate } from "react-router-dom";

const NoUpcommingEvents = () => {
  let navigate = useNavigate();
  let handleBackClick = () => {
    navigate("/");
  };

  return (
    <div style={{ paddingTop: "5em" }}>
      <h1>No Upcomming Events</h1>
      <button
        type="button"
        id="btnOrder"
        onClick={handleBackClick}
        className="btn btn-primary btn-primary-themed btn-md font-upper">
        Back home
      </button>
    </div>
  );
};

export default NoUpcommingEvents;
