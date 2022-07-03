import { FaRegBuilding } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

import { colors } from "../../theme/theme";

const OtherPositions = ({ department }) => {
	const [departmentJobs, listLoading] = useSelector((state) => [
		state.jobResults.list.find((details) => details.department === department),
		state.jobResults.loading,
	]);
	return (
		<div className="other-options">
			<p className="heading">Other Job Openings</p>
			<span className="line" />
			<div className="job-list">
				{listLoading ? (
					<div className="loading-container">
						<ClipLoader color={colors.primary} />
					</div>
				) : (
					departmentJobs?.jobs?.slice(0, 3).map((job) => (
						<div key={job.id} className="job-details">
							<div className="job-data">
								<p className="title-small">{job.title}</p>
								<div className="details">
									<div className="details-chip">
										<FaRegBuilding color={colors.secondary} />
										<span className="details-text">{job.department.title}</span>
									</div>
									<div className="details-chip">
										<ImLocation color={colors.secondary} />
										<span className="details-text">{job.location.title}</span>
									</div>
									<span className="job-type">{job.type}</span>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default OtherPositions;
