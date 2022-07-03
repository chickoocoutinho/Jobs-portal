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

	const handleDepartmentChange = ({ value }) => {
		dispatch.jobSearch.updateDepartment(value);
		dispatch.jobResults.getJobListing();
	};

	const handleLocationChange = ({ value }) => {
		dispatch.jobSearch.updateDepartment(value);
		dispatch.jobResults.getJobListing();
	};

	const handleFunctionChange = ({ value }) => {
		dispatch.jobSearch.updateDepartment(value);
		dispatch.jobResults.getJobListing();
	};

	return (
		<div className="dropdownContainer">
			<Select
				isLoading={dropdownLoading}
				options={departmentDropdownOptions}
				name="Department"
				placeholder="Department"
				onChange={handleDepartmentChange}
				value={
					departmentDropdownOptions[
						departmentDropdownOptions.findIndex(
							({ value }) => value === department
						)
					]
				}
			/>
			<Select
				isLoading={dropdownLoading}
				options={locationDropdownOptions}
				name="Location"
				placeholder="Location"
				onChange={handleLocationChange}
				value={
					locationDropdownOptions[
						locationDropdownOptions.findIndex(({ value }) => value === location)
					]
				}
			/>
			<Select
				isLoading={dropdownLoading}
				options={functionDropdownOptions}
				name="Function"
				placeholder="Function"
				onChange={handleFunctionChange}
				value={
					functionDropdownOptions[
						functionDropdownOptions.findIndex(
							({ value }) => value === functions
						)
					]
				}
			/>
		</div>
	);
};

export default SearchDropdowns;
