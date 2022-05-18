import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
        setEvent(response.event);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleClick = () => {
    navigate("/events");
  };

  if (loading) return <h1>loading....</h1>;

  return (
    !loading &&
    event && (
      <div style={{ paddingTop: "5em" }}>
        <h1>{event.artist}</h1>
        <h1>{event.name}</h1>
        <h1>${event.price}</h1>
        <h1>{event.venue}</h1>
        <p>{event.description}</p>
        <img src={event.bandimageUrl} alt="cover" />
        <button onClick={handleClick}>Back to events</button>
      </div>
    )
  );
};

export default EventInfo;
