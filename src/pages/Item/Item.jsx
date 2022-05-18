import React from "react";
import { EventInfo } from "../../components/Events/EventInfo";
import { useParams } from "react-router-dom";

const Item = () => {
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
        <h1>{id}</h1>
        <h1>{event.name}</h1>
        <h1>{event.price}</h1>
        <h1>{event.imgUrl}</h1>
        <h1>{id}</h1>
        {/* <EventInfo /> */}
      </div>
    )
  );
};

export default Item;
