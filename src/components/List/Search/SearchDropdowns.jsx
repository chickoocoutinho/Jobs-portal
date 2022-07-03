import Select from "react-select";

const SearchDropdowns = () => {
	return (
		<div className="dropdownContainer">
			<Select options={[]} name="Department" placeholder="Department" />
			<Select options={[]} name="Location" placeholder="Location" />
			<Select options={[]} name="Function" placeholder="Function" />
		</div>
	);
};

export default SearchDropdowns;
