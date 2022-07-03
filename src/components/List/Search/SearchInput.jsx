import debounce from "lodash.debounce";
import { useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = () => {
	const dispatch = useDispatch();
	const inputValue = useSelector((state) => state.jobSearch.input);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedSearch = useCallback(
		debounce((body) => {
			dispatch.jobResults.getJobListing();
		}, 500),
		[]
	);

	const handleInputChange = (e) => {
		dispatch.jobSearch.updateInput(e.target.value.trim());
		debouncedSearch();
	};

	return (
		<>
			<label for="search">
				<div className="search-input" labe>
					<input
						id="search"
						placeholder="Search for a Job"
						value={inputValue}
						onChange={handleInputChange}
					/>
					<AiOutlineSearch className="icon" />
				</div>
			</label>
		</>
	);
};

export default SearchInput;
