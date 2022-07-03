import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import LoadingGif from "../assets/Logo-main-gif.gif";
import { useLocation } from "react-router-dom";

const Loader = () => {
	let location = useLocation();
	const [initialLoad, setInitialLoad] = useState(true);

	const dispatch = useDispatch();

	const [resultsLength] = useSelector((state) => [
		state.jobResults.list.length,
		//may cause unnecessary rerender
	]);

	useEffect(() => {
		if (initialLoad && resultsLength === 0) {
			dispatch.jobResults.getJobListing().then(() => setInitialLoad(false));
		}
	}, [initialLoad, resultsLength, dispatch.jobResults]);

	console.log(location);
	return (
		initialLoad &&
		resultsLength === 0 &&
		(location.pathname === "" || location.pathname === "/") && (
			<div className="loading-backdrop">
				<div className="container">
					<img className="loading-gif" alt="loading" src={LoadingGif} />
				</div>
			</div>
		)
	);
};

export default Loader;
