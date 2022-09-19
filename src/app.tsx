import "./global.css";

import { Router } from "@solidjs/router";
import Routes from "./router";
import { render } from "solid-js/web";

const App = () => {
	return <Router>
		<Routes />
	</Router>
};

render(() => <App />, document.querySelector("#root")!);