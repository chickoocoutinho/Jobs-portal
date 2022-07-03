import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";

import store from "./store";

import App from "./App";

const persistor = getPersistor();

const root = document.getElementById("root");
render(
	<ReduxProvider store={store}>
		<PersistGate loading={<h1>LOADING</h1>} persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</ReduxProvider>,
	root
);
