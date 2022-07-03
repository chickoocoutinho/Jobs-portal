import axios from "axios";

const baseUrl = "https://teknorix.jobsoid.com";

export const getJobs = ({ input, department, location, functions }) => {
	let query =
		(input && `q=${input}&`) +
		(location && `loc=${location}&`) +
		(department && `dept=${department}&`) +
		(functions && `fun=${functions}`);
	if (query.charAt(query.length - 1) === "&") query = query.slice(0, -1);

	return axios.get(baseUrl + "/api/v1/jobs?" + query);
};

export const getJobDetails = (id) => {
	return axios.get(baseUrl + "/api/v1/jobs/" + id);
};

export const getDepartments = () => {
	return axios.get(baseUrl + "/api/v1/departments");
};

export const getLocations = () => {
	return axios.get(baseUrl + "/api/v1/locations");
};

export const getFunctions = () => {
	return axios.get(baseUrl + "/api/v1/functions");
};
