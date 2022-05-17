import React, { useState, useEffect } from "react";
import { EventListItem } from "../EventListItem";
import { Header } from "../../Header";

const Eventlist = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/events").then((response) =>
      response.json().then((data) => {
        setEvents(data);
      })
    );
  }, []);

  return (
    <div className="container" id="eventtable">
      <div className="container">
        <Header />
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <EventListItem event={event} key={event.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Eventlist;
