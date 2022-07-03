import { init } from "@rematch/core";
import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";

import jobSearch from "./models/jobSearch";
import jobResults from "./models/jobResults";

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["jobResults"],
};

const models = {
	jobSearch,
	jobResults,
};

const store = init({
	models,
	plugins: [persistPlugin(persistConfig)],
});

export default store;
