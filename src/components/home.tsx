const Menu = lazy(() => import("./menu/menu"));
const Title = lazy(() => import("./title"));

import { lazy } from "solid-js";

const Home = () => {
	return <>
		<Menu />
		<div class="bg-background w-screen min-h-screen">
			<Title />
			<div class="h-screen"></div>
		</div>
	</>
};

export default Home;