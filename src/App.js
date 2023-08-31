import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Links from "./pages/Links";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/all-links" element={<Links />} />
			</Routes>
		</BrowserRouter>
	);
}
