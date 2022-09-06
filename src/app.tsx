import "../src/global.css";

import { Navigate, Route, Router, Routes } from "@solidjs/router";

import FourOFour from "../pages/404";
import Index from "../pages/index";
import { render } from "solid-js/web";

const App = () => {
	return <Router>
		<Routes>
			<Route path="/" component={ Index } />
			<Route path="*" component={ FourOFour } />
		</Routes>
	</Router>	
};

render(() => <App />, document.getElementById("root")!);