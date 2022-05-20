import React from "react";
import CartStore from "../../utils/CartStore";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Shoppingcartitem = ({ event }) => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ color: "white" }}>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={3}>
          {event.artist}
        </Grid>
        <Grid item xs={3}>
          <div className="btn-group">
            <input
              type="number"
              style={{ width: "60px" }}
              value={event.quantity}
              onChange={(e) =>
                CartStore.dispatch({
                  type: "update",
                  payload: { ...event, quantity: parseInt(e.target.value) },
                })
              }
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          {event.quantity * event.price}
        </Grid>
        <Grid item xs={3}>
          <button
            className="btn btn-link"
            onClick={() =>
              CartStore.dispatch({ type: "delete", payload: event })
            }>
            <span className="bi bi-trash-fill font-large text-dark">
              <CloseOutlinedIcon />
            </span>
          </button>
        </Grid>
      </Grid>
    </Box>
    // <tr className="align-middle">
    //   <td>
    //     {new Date(event.date).toLocaleString()}
    //     <br />
    //     {event.name}
    //     <br />
    //     {event.artist}
    //   </td>
    //   <td className="max-50">${event.price}</td>
    //   <td className="max-50">
    //     <div className="btn-group">
    //       <input
    //         type="number"
    //         className="w-auto"
    //         value={event.quantity}
    //         onChange={(e) =>
    //           CartStore.dispatch({
    //             type: "update",
    //             payload: { ...event, quantity: parseInt(e.target.value) },
    //           })
    //         }
    //       />
    //     </div>
    //   </td>
    //   <td>${event.quantity * event.price}</td>
    //   <td>
    //     <button
    //       className="btn btn-link"
    //       onClick={() =>
    //         CartStore.dispatch({ type: "delete", payload: event })
    //       }>
    //       <span className="bi bi-trash-fill font-large text-dark">
    //         <CloseOutlinedIcon />
    //       </span>
    //     </button>
    //   </td>
    // </tr>
  );
};
export default Shoppingcartitem;
