import "./Search.scss";
import SearchDropdowns from "./SearchDropdowns";
import SearchFieldData from "./SearchFieldData";
import SearchInput from "./SearchInput";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Search = () => {
	const dispatch = useDispatch();

	const [dropdownLoading] = useSelector((state) => [
		state.jobResults.dropdownLoading,
	]);

	useEffect(() => {
		if (dropdownLoading) dispatch.jobResults.getDropdowns();
	}, [dropdownLoading, dispatch.jobResults]);

	return (
		<>
			<div className="bg-box search-box">
				<SearchInput />
				<SearchDropdowns />
			</div>
			<SearchFieldData />
		</>
	);
};

export default Search;
