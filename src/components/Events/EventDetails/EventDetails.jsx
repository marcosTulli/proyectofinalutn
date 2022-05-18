import React from "react";
import { useParams } from "react-router-dom";

const EventInfo = () => {
  let { id } = useParams();
  const [event, setEvent] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3333/events/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setEvent(response.event);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h1>loading....</h1>;

  return (
    !loading &&
    event && (
      <div style={{ paddingTop: "5em" }}>
        <h1>{event.artist}</h1>
        <h1>{event.name}</h1>
        <h1>${event.price}</h1>
        <p>{event.description}</p>
        <img src={event.imgUrl} alt="cover" />
      </div>
    )
  );
};

export default EventInfo;
