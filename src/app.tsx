import "./global.css";

import Cursor from "./components/cursor";
import { Router } from "@solidjs/router";
import Routes from "./router";
import { render } from "solid-js/web";

const App = () => {
	return <Router>
		<Cursor />
		<Routes />
	</Router>
};

render(() => <App />, document.querySelector("#root")!);