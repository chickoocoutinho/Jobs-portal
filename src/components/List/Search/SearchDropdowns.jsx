import Select from "react-select";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const SearchDropdowns = () => {
	const [
		dropdownLoading,
		departmentDropdown,
		functionDropdown,
		locationDropdown,
	] = useSelector((state) => [
		state.jobResults.dropdownLoading,
		state.jobResults.departmentDropdown,
		state.jobResults.functionDropdown,
		state.jobResults.locationDropdown,
	]);

	const [
		departmentDropdownOptions,
		functionDropdownOptions,
		locationDropdownOptions,
	] = useMemo(() => {
		return [
			departmentDropdown.map(({ id, title }) => ({ value: id, label: title })),
			functionDropdown.map(({ id, title }) => ({ value: id, label: title })),
			locationDropdown.map(({ id, title }) => ({ value: id, label: title })),
		];
	}, [departmentDropdown, functionDropdown, locationDropdown]);

	const handleDepartmentChange = ({ value, label }) => {
		console.log({ value, label });
	};

	return (
		<div className="dropdownContainer">
			<Select
				isLoading={dropdownLoading}
				options={departmentDropdownOptions}
				name="Department"
				placeholder="Department"
				onChange={handleDepartmentChange}
			/>
			<Select
				isLoading={dropdownLoading}
				options={locationDropdownOptions}
				name="Location"
				placeholder="Location"
			/>
			<Select
				isLoading={dropdownLoading}
				options={functionDropdownOptions}
				name="Function"
				placeholder="Function"
			/>
		</div>
	);
};

export default SearchDropdowns;
