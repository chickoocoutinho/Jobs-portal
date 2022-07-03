const initialState = {
	input: "",
	department: "",
	location: "",
	functions: "",
};

const jobSearch = {
	state: initialState,
	reducers: {
		updateInput: (state, payload) => {
			return { ...state, input: payload };
		},
		updateDepartment: (state, payload) => {
			return { ...state, department: payload };
		},
		updateLocation: (state, payload) => {
			return { ...state, location: payload };
		},
		updateFunction: (state, payload) => {
			return { ...state, functions: payload };
		},
		resetFilters: () => {
			return initialState;
		},
	},
	// effects: (dispatch) => ({}),
};

export default jobSearch;
