import { Routes, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import List from "./components/List/List";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<List />} />
				<Route path="about" element={<Details />} />
			</Routes>
		</>
	);
}

export default App;
