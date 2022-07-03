import { useSelector } from "react-redux";
import DepartmentHeading from "./DepartmentHeading";
import DepartmentJobs from "./DepartmentJobs";

import "./Result.scss";

const Results = () => {
	const departmentList = useSelector((state) => state.jobResults.list);
	return (
		<>
			{departmentList.map((department, index) => (
				<div key={index + department.department}>
					<DepartmentHeading heading={department.department} />
					<DepartmentJobs jobs={department.jobs} />
				</div>
			))}
		</>
	);
};

export default Results;
