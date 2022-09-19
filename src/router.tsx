import { Route, Routes } from "@solidjs/router";

import FourOFour from "../pages/404";
import Index from "../pages/index";

const Router = () => {
	return <Routes>
		<Route path="/" component={ Index }/>
		<Route path="*" component={ FourOFour }/>
	</Routes>
};

export default Router;