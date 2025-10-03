import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import ShopPage from "./pages/ShopPage";
import useLenis from "./hooks/useLenis";
import CustomCursor from "./components/CustomCursor";

function App() {
  useLenis();

  return (
    <div className="App">
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;