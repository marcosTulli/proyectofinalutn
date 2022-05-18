import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Event } from "./pages/Event";
import { Item } from "./pages/Item";
import { Cart } from "./pages/Cart";
import { Confirm } from "./pages/Confirm";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </Router>
  );
}

export default App;
