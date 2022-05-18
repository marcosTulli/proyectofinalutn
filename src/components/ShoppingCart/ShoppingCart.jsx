import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartStore from "../../utils/CartStore";
import { ShoppingCartItem } from "../ShoppingCartItem";
import { CheckoutForm } from "./../CheckoutForm";

function Shoppingcart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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

  useEffect(() => {
    updateCart();
    CartStore.subscribe(() => {
      updateCart();
    });
  }, []);

  return !cartIsEmpty() ? (
    <div className="container" id="carttable">
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Price</th>
            <th scope="col"># Tickets</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <ShoppingCartItem event={item} key={item.id} />
          ))}
        </tbody>
        <div> Total: ${totalAmount}</div>
        <tfoot>
          <CheckoutForm />
        </tfoot>
      </table>
    </div>
  ) : (
    <div>
      <h1 style={{ paddingTop: "5rem" }}> The cart is empty</h1>
      <tr className="align-middle">
        <td colSpan="5" className="text-center">
          <button
            type="button"
            id="btnOrder"
            onClick={handleBackClick}
            className="btn btn-primary btn-primary-themed btn-md font-upper">
            Back to events
          </button>
        </td>
      </tr>
    </div>
  );
}
export default Shoppingcart;
