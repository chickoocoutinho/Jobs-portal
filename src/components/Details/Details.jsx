import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobDetails } from "../../services";
import DetilsHeading from "./DetilsHeading";

import "./Details.scss";
import DetailsText from "./DetailsText";

const Details = () => {
	let { id } = useParams();

	const [loading, setLoading] = useState(true);
	const [jobData, setJobData] = useState({
		id: 41863,
		code: "",
		title: "Software Engineer - Xamarin (iOS / Android)",
		description:
			"<p><strong>Looking for experienced Xamarin Developers to develop Cross Platform iPhone / iPad / Android Apps.</strong></p>\n<p><strong>Required Skills:</strong></p>\n<ul><li>B.E. (CSE/IT) or MCA graduate</li><li>Strong understanding in Object Oriented Design</li><li>Possess strong analytical/logical thinking and problem solving skills and clarity of thought&nbsp;</li><li>Understanding of Software Design Patterns</li><li>Ability to pay attention to detail&nbsp;</li><li>Should have&nbsp;<strong>min 1 year</strong>&nbsp;experience of&nbsp;<strong>Xamarin</strong>&nbsp;Development with&nbsp;<strong>Android or iOS</strong></li><li>Should have strong understanding of&nbsp;<strong>IOS Storyboard Concepts</strong></li><li>Bonus points for Experience in&nbsp;<strong>Xamarin.Forms</strong></li></ul>",
		industry: "Computer Software\r\n",
		postedDate: "2022-07-02T01:00:04.493",
		closingDate: null,
		attributes: [],
		location: {
			id: 4,
			title: "Verna, Goa",
			city: "Verna",
			state: "Goa",
			country: "India",
			zip: "403722",
		},
		department: {
			id: 5,
			title: "Engineering",
		},
		division: [],
		function: {
			id: 8895,
			title: "Information Technology",
		},
		type: "Full Time",
		positions: 2,
		experience: "1 - 5 years",
		salary: "",
		hostedUrl:
			"https://jobs.teknorix.com/j/41863/software-engineer-xamarin-ios-android",
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
			<DetailsText description={jobData.description} />
		</>
	);
};

export default Details;
