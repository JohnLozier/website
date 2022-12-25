const Blog = lazy(() => import("./blog/blog"));
const Projects = lazy(() => import("./projects/projects"));
const Title = lazy(() => import("./title"));
const Loading = lazy(() => import("./post/loading"));

import Menu from "./menu/menu";
import Parallax from "./parallax";
import { lazy } from "solid-js";

const Home = () => {
	return <>
		<div class="w-screen min-h-screen">
			<Title />
			<Projects />
			<Blog />
		</div>
		<Loading />
		<Parallax />
		<Menu />
	</>
};

export default Home;