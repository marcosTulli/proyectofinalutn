import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { EventInfo } from "./pages/EventInfo";
import { Cart } from "./pages/Cart";
import { ConfirmPurchase } from "./pages/ConfirmPurchase";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<ConfirmPurchase />} />
      </Routes>
    </Router>
  );
}

export default App;
