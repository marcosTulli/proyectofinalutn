import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
        <div className="card my-3">
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
              <button
                type="button"
                className="btn btn-primary btn-primary-themed btn-md font-upper"
                onClick={handleClick}>
                Back to events
              </button>
              <a rel="noreferrer" href={event.site} target="_blank">
                <button
                  className="btn btn-primary btn-primary-themed btn-md font-upper"
                  type="button"
                  size="small">
                  Website
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      // !loading &&
      // event && (
      //   <div style={{ paddingTop: "6rem" }}>
      //     <Card sx={{ maxWidth: 345 }}>
      //       <CardMedia
      //         component="img"
      //         height="140"
      //         image={event.bandimageUrl}
      //         alt={event.name}
      //       />
      //       <CardContent>
      //         <Typography gutterBottom variant="h5" component="div">
      //           {event.artist}
      //         </Typography>
      //         <Typography variant="body2" color="text.secondary">
      //           {event.description}
      //         </Typography>
      //         <Typography variant="body2" color="text.secondary">
      //           Tour {event.name}
      //         </Typography>
      //         <Typography variant="body2" color="text.secondary">
      //           <strong>Ticket Price ${event.price}</strong>
      //         </Typography>
      //       </CardContent>
      //       <CardActions>
      //         <Button size="small" onClick={handleClick}>
      //           Back to events
      //         </Button>
      //         <a rel="noreferrer" href={event.site} target="_blank">
      //           <Button size="small">Website</Button>
      //         </a>
      //       </CardActions>
      //     </Card>
      // </div>
    )
  );
};

export default EventInfo;
