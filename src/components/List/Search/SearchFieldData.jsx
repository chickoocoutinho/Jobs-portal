import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { colors } from "../../../theme/theme";

let resetValue = { value: "", label: "" };

const SearchFieldData = () => {
	const dispatch = useDispatch();
	const [input, department, location, functions] = useSelector((state) => [
		state.jobSearch.input,
		state.jobSearch.department.label,
		state.jobSearch.location.label,
		state.jobSearch.functions.label,
	]);

	const handleClearAll = () => {
		dispatch.jobSearch.resetFilters();
		dispatch.jobResults.getJobListing();
	};

	const handleDelete = (indentifier) => {
		switch (indentifier) {
			case 1:
				dispatch.jobSearch.updateDepartment(resetValue);
				break;
			case 2:
				dispatch.jobSearch.updateLocation(resetValue);
				break;
			case 3:
				dispatch.jobSearch.updateFunction(resetValue);
				break;

			default:
				dispatch.jobSearch.updateInput("");
				break;
		}
		dispatch.jobResults.getJobListing();
	};

	return input || department || location || functions ? (
		<div className="bg-box search-data">
			<div className="list">
				{[input, department, location, functions].map(
					(param, index) =>
						param && (
							<div className="chip">
								{param}
								<span
									className="chip-cancle"
									onClick={() => handleDelete(index)}
								>
									<AiOutlineClose color={colors.grey} />
								</span>
							</div>
						)
				)}
			</div>
			<span onClick={handleClearAll} className={"clear-all"}>
				Clear All
			</span>
		</div>
	) : null;
};

export default SearchFieldData;
