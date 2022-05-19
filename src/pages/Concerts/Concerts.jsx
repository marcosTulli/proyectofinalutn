import React, { useState, useEffect } from "react";
import { EventListItem } from "../../components/Events/EventListItem";

const Concerts = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/events").then((response) =>
      response.json().then((data) => {
        setEvents(data);
      })
    );
  }, []);

  console.log(events.length);
  return (
    <section className="bg-light py-4 my-5">
      <div className="container">
        <div className="row">
          {events.map((event) => (
            <EventListItem event={event} key={event.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Concerts;
