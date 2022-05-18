import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { EventInfo } from "./pages/EventInfo";
import { Cart } from "./pages/Cart";
import { ConfirmPurchase } from "./pages/ConfirmPurchase";
import { Header } from "./components/Header";
import { Concerts } from "./pages/Concerts";
import { NoUpcommingEvents } from "./pages/NoUpcommingEvents";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/event/:id" element={<EventInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<ConfirmPurchase />} />
        <Route path="*" element={<NoUpcommingEvents />} />
      </Routes>
    </Router>
  );
}

export default App;
