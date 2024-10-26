import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </div>
        </BrowserRouter>
        // Header

        // Home
    );
}

export default App;
