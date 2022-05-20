import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CartStore from "../../utils/CartStore";
import { ShoppingCartItem } from "../ShoppingCartItem";
import { Button } from "../Button";
import "./Shopping.css";

function Shoppingcart() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const count = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    updateCart();
    CartStore.subscribe(() => {
      updateCart();
    });
  }, []);

  let cartIsEmpty = () => {
    return cart.length === 0;
  };

  let updateCart = () => {
    const state = CartStore.getState();
    if (state) {
      state.then((state) => {
        const cart = state.cart;
        const totalAmount = state.cart.reduce(
          (p, n) => p + n.quantity * n.price,
          0
        );
        setCart(cart);
        setTotalAmount(totalAmount);
      });
    }
  };

  let handleBackClick = () => {
    navigate("/concerts");
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    CartStore.dispatch({ type: "clear" });
    navigate("/confirm");
  };

  return !cartIsEmpty() ? (
    <body style={{ paddingTop: "3em" }}>
      <div className="container mb-4">
        <div className="row pt-2 pb-4">
          <div className="col-lg-8">
            <form action="#" />
            <div className="row pt-4">
              <div className="col-lg-6 pl-0">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    rows="5"
                    placeholder="Enter Address"
                    id="Address"
                    required></input>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6 pl-0">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter State"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 pr-0 mob-pl-0">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Zip"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mob-pl-0">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name of card"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Card number"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6 pl-0">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="01/95"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 pr-0 mob-pl-0">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Cvv"
                        irequired
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-1">
            {cart.map((item) => (
              <ShoppingCartItem event={item} key={item.id} />
            ))}
            <div
              className="row border-top  border-dark"
              style={{ paddingTop: "1em" }}>
              <div className="col-8">
                <h5 className="pt-1">Total</h5>
              </div>
              <div className="col-4">
                <h5 className="pt-2">${totalAmount}</h5>
              </div>
            </div>
            <div className="row pb-5 pt-4">
              <div className="col-12">
                <div className="form-group form-check"></div>
                <Button
                  class="btn btn-primary"
                  style={{ fontSize: "2rem", padding: "0 1em 0 1em" }}
                  type="button"
                  id="btnOrder"
                  onClick={handleSubmit}>
                  Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  ) : (
    <div>
      <h1 style={{ paddingTop: "5rem" }}> The cart is empty</h1>
      <tr className="align-middle">
        <td colSpan="5" className="text-center">
          <Button
            type="button"
            id="btnOrder"
            onClick={handleBackClick}
            className="btn btn-primary btn-primary-themed btn-md font-upper">
            Back to events
          </Button>
        </td>
      </tr>
    </div>
  );
}
export default Shoppingcart;
