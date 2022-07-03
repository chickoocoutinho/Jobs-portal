import axios from "axios";

const baseUrl = "https://teknorix.jobsoid.com/";

export const getJobs = () => {
	return axios.get(baseUrl + "/api/v1/jobs");
};

export const getJobDetails = (id) => {
	return axios.get(baseUrl + "/api/v1/jobs/" + id);
};

export const getDepartments = () => {
	return axios.get(baseUrl + "/api/v1/departments");
};

export const getLocations = () => {
	return axios.get(baseUrl + "/api/v1/location");
};

export const getFunctions = () => {
	return axios.get(baseUrl + "/api/v1/functions");
};
