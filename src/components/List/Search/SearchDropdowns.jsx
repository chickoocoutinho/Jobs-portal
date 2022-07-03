import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";

const SearchDropdowns = () => {
	const dispatch = useDispatch();
	const [
		dropdownLoading,
		departmentDropdown,
		functionDropdown,
		locationDropdown,
		department,
		location,
		functions,
	] = useSelector((state) => [
		state.jobResults.dropdownLoading,
		state.jobResults.departmentDropdown,
		state.jobResults.functionDropdown,
		state.jobResults.locationDropdown,
		state.jobSearch.department,
		state.jobSearch.location,
		state.jobSearch.functions,
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

	const handleDepartmentChange = (option) => {
		dispatch.jobSearch.updateDepartment(option);
		dispatch.jobResults.getJobListing();
	};

	const handleLocationChange = (option) => {
		dispatch.jobSearch.updateLocation(option);
		dispatch.jobResults.getJobListing();
	};

	const handleFunctionChange = (option) => {
		dispatch.jobSearch.updateFunction(option);
		dispatch.jobResults.getJobListing();
	};
	console.log(department.value);
	return (
		<div className="dropdownContainer">
			<Select
				isLoading={dropdownLoading}
				options={departmentDropdownOptions}
				name="Department"
				placeholder="Department"
				onChange={handleDepartmentChange}
				value={department.value ? department : null}
			/>
			<Select
				isLoading={dropdownLoading}
				options={locationDropdownOptions}
				name="Location"
				placeholder="Location"
				onChange={handleLocationChange}
				value={location.value ? location : null}
			/>
			<Select
				isLoading={dropdownLoading}
				options={functionDropdownOptions}
				name="Function"
				placeholder="Function"
				onChange={handleFunctionChange}
				value={functions.value ? functions : null}
			/>
		</div>
	);
};

export default SearchDropdowns;
