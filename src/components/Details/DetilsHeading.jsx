import { FaRegBuilding } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { colors } from "../../theme/theme";

const DetilsHeading = ({
	department,
	location,
	type,
	company,
	applyUrl,
	title,
}) => {
	return (
		<div className="heading">
			<h4 className="title">{`${department} Department at ${company}`}</h4>
			<h3 className="job-name">{title}</h3>
			<div className="details">
				<div className="details-chip">
					<FaRegBuilding className="icon" color={colors.secondary} />
					<span className="details-text">{department}</span>
				</div>
				<div className="details-chip">
					<ImLocation className="icon" color={colors.secondary} />
					<span className="details-text">{location}</span>
				</div>
				<span className="job-type">{type}</span>
			</div>
			<a href={applyUrl} rel="noreferrer noopener" target="_blank">
				<button className="btn apply">Apply</button>
			</a>
			<hr />
		</div>
	);
};

export default DetilsHeading;
