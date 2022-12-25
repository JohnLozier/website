import "./styles/global.css";

import Cursor from "./components/cursor";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import Routes from "./router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { render } from "solid-js/web";

const App = () => {

	dayjs.extend(relativeTime);

	window.scrollTo(0, 0); // reset scroll to top

	return <Router>
		<MetaProvider>
			<Cursor />
			<Routes />
		</MetaProvider>
	</Router>
};

render(() => <App />, document.querySelector("#root")!);