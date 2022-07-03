import "./Search.scss";
import SearchDropdowns from "./SearchDropdowns";
import SearchFieldData from "./SearchFieldData";
import SearchInput from "./SearchInput";

const Search = () => {
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
