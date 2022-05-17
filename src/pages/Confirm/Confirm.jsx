import React from "react";
import { Header } from "../../components/Header";

const Confirm = () => {
  return (
    <div>
      <div className="jumbotron p-5">
        <Header />
        <h1 className="display-4">Thank You!</h1>
        <p className="lead">
          We will process your order as quickly as possible.
        </p>
      </div>
    </div>
  );
};

export default Confirm;
