import Results from "./Results/Results";
import Search from "./Search/Search";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import { colors } from "../../theme/theme";

const List = () => {
	const [initialLoad, setInitialLoad] = useState(true);

	const dispatch = useDispatch();

	const [resultsLength, loading] = useSelector((state) => [
		state.jobResults.list.length,
		state.jobResults.loading,
	]);

	useEffect(() => {
		if (initialLoad && resultsLength === 0) {
			dispatch.jobResults.getJobListing();
			setInitialLoad(false);
		}
	}, [initialLoad, resultsLength, dispatch.jobResults]);

	return (
		<>
			<Search />
			{loading && <BarLoader width={"100%"} color={colors.primary} />}
			<Results />
		</>
	);
};

export default List;
