import {
	getDepartments,
	getFunctions,
	getJobs,
	getLocations,
} from "../../services";

const initialState = {
	loading: false,
	list: [], //array of objects: {department: string, jobs: list}
	departmentDropdown: [],
	functionDropdown: [],
	locationDropdown: [],
	dropdownLoading: true,
};

const jobResults = {
	state: initialState,
	reducers: {
		updateJobsStart: (state) => {
			return { ...state, loading: true };
		},
		updateJobs: (state, paload) => {
			let newList = [];
			//map 2 times to get data in format  {department: string, jobs: list}
			let uniqueDepartments = new Map();
			paload.forEach((job) => {
				if (!uniqueDepartments.has(job.department.id)) {
					newList.push({
						department: job.department.title,
						jobs: [],
					});
					uniqueDepartments.set(job.department.id, newList.length - 1);
				}
			});

			paload.forEach((job) => {
				newList[uniqueDepartments.get(job.department.id)].jobs.push(job);
			});

			return { ...state, loading: false, list: newList };
		},
		updateDropdown: (state, { department, location, fns }) => {
			return {
				...state,
				dropdownLoading: false,
				departmentDropdown: department,
				functionDropdown: location,
				locationDropdown: fns,
			};
		},
	},
	effects: (dispatch) => ({
		getJobListing(payload, rootState) {
			console.log(rootState);
			this.updateJobsStart();
			return getJobs({
				input: rootState.jobSearch.input,
				department: rootState.jobSearch.department,
				location: rootState.jobSearch.location,
				functions: rootState.jobSearch.functions,
			}).then((respose) => this.updateJobs(respose.data));
		},
		getDropdowns() {
			return Promise.all([
				getDepartments(),
				getLocations(),
				getFunctions(),
			]).then((respose) =>
				this.updateDropdown({
					department: respose[0].data,
					location: respose[1].data,
					fns: respose[2].data,
				})
			);
		},
	}),
};

export default jobResults;
