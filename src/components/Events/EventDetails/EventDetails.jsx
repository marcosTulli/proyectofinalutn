import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../Button";

const EventInfo = () => {
  let { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3333/events/${id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response.event);
        setEvent(response.event);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleClick = () => {
    navigate("/concerts");
  };

  if (loading) return <h1>loading....</h1>;
  return (
    !loading &&
    event && (
      <div className="col-md-6 col-lg-4">
        <div style={{ backgroundColor: "gray" }} className="card my-3">
          <div className="card-thumbnail">
            <img
              className="img-fluid"
              height="140"
              src={event.bandimageUrl}
              alt={event.name}
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">{event.artist}</h3>
            <p className="card-text">{event.description}</p>
            <p className="card-text">Date: {event.date}</p>
            <p className="card-text">Price: ${event.price}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "1em",
              }}>
              <Button type="button" onClick={handleClick}>
                Back
              </Button>
              <a rel="noreferrer" href={event.site} target="_blank">
                <Button type="button" size="small">
                  Website
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EventInfo;
