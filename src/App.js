import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Home";
import Prodducts from "./components/Product/Prodducts";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Prodducts />} />
				<Route path="/:id" element={<Prodducts />} />
			</Routes>
		</Router>
	);
}

export default App;
