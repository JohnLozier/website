const Menu = lazy(() => import("./menu/menu"));
const Title = lazy(() => import("./title"));
const Projects = lazy(() => import("./projects/projects"));

import { lazy } from "solid-js";

const Home = () => {
	return <>
		<Menu />
		<div class="bg-background w-screen min-h-screen">
			<Title />
			<Projects />
		</div>
	</>
};

export default Home;