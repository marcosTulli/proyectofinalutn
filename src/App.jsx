import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Events } from "./pages/Events";
import { Item } from "./pages/Item";
import { Cart } from "./pages/Cart";
import { Confirm } from "./pages/Confirm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/events" element={<Events />} />
        <Route path="/item" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </Router>
  );
}

export default App;
