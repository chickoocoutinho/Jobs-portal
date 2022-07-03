import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobDetails } from "../../services";
import DetilsHeading from "./DetilsHeading";

import "./Details.scss";
import DetailsText from "./DetailsText";
import OtherPositions from "./OtherPositions";
import ShareOptions from "./ShareOptions";

const Details = () => {
	let { id } = useParams();

	const [loading, setLoading] = useState(true);
	const [jobData, setJobData] = useState({
		title: " ",
		description: "",
		location: {
			title: "Verna, Goa",
		},
		department: {
			title: "Engineering",
		},
		type: "Full Time",
		applyUrl: "https://jobs.teknorix.com/apply/41863",
		company: "Teknorix",
	});

	useEffect(() => {
		getJobDetails(id).then((response) => {
			setLoading(false);
			setJobData(response.data);
		});
	}, [id]);

	return loading ? (
		<div></div>
	) : (
		<>
			<DetilsHeading
				title={jobData.title}
				department={jobData.department.title}
				location={jobData.location.title}
				type={jobData.type}
				company={jobData.company}
				applyUrl={jobData.applyUrl}
			/>
			<div className="split-container">
				<DetailsText description={jobData.description} />
				<div className="right-container">
					<OtherPositions />
					<ShareOptions
						applyUrl={jobData.applyUrl}
						company={jobData.company}
						title={jobData.title}
					/>
				</div>
			</div>
		</>
	);
};

export default Details;
