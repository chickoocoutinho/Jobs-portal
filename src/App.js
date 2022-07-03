import { Routes, Route } from "react-router-dom";

import Details from "./components/Details/Details";
import List from "./components/List/List";

import "./App.scss";

import Loader from "./components/Loader";

function App() {
	return (
		<div className="app">
			<Loader />
			<Routes>
				<Route path="/" element={<List />} exact />
				<Route path="/job/:id/:slug" element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;
