import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CartStore from "../../utils/CartStore";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });

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

  let handleOrderClick = () => {
    CartStore.dispatch({ type: "clear" });
    navigate("/confirm");
  };

  useEffect(() => {
    updateCart();
    CartStore.subscribe(() => {
      updateCart();
    });
  }, []);

  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPhone1">Telephone</label>
          <input
            type="telephone"
            class="form-control"
            id="exampleInputTelephone1"
            aria-describedby="telephoneHelp"
            placeholder="Enter Telephone"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Subscribe to Newsletter
          </label>
        </div>
        <br />
        <button
          class="btn btn-primary"
          type="button"
          id="btnOrder"
          onClick={handleOrderClick}
          className="btn btn-primary btn-primary-themed btn-md font-upper">
          Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
