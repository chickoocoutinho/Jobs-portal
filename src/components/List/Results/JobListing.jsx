import { FaRegBuilding } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import { colors } from "../../../theme/theme";

const JobListing = ({
	id,
	title,
	type,
	department,
	location,
	applyUrl,
	hostedUrl,
	slug,
}) => {
	let navigate = useNavigate();

	const preventDefault = (e) => {
		e.stopPropagation();
	};
	return (
		<div
			className="job-listing-container"
			onClick={() => navigate(`/job/${id}/${slug}`)}
		>
			<div className="job-data">
				<h4 className="title">{title}</h4>
				<div className="details">
					<div className="details-chip">
						<FaRegBuilding color={colors.secondary} />
						<span className="details-text">{department}</span>
					</div>
					<div className="details-chip">
						<ImLocation color={colors.secondary} />
						<span className="details-text">{location}</span>
					</div>
					<span className="job-type">{type}</span>
				</div>
			</div>
			<div className="actions">
				<a
					href={applyUrl}
					rel="noreferrer noopener"
					target="_blank"
					onClick={preventDefault}
				>
					<button className="btn apply">Apply</button>
				</a>
				<a
					href={hostedUrl}
					rel="noreferrer noopener"
					target="_blank"
					onClick={preventDefault}
				>
					<button className="btn view">View</button>
				</a>
			</div>
		</div>
	);
};

export default JobListing;
