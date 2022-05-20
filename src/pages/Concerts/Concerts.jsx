import React, { useState, useEffect } from "react";
import EventCard from "../../components/Events/EventCard/EventCard";

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
    <section className="py-4 my-5">
      <div>
        <div className="row">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Concerts;
