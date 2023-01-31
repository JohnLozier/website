import Parallax from "./parallax";
import StaggeredScroll from "../lib/scroll";
import { lazy } from "solid-js";

const Blog = lazy(() => import("./blog/blog"));
const Projects = lazy(() => import("./projects/projects"));
const Title = lazy(() => import("./title"));
const Loading = lazy(() => import("./post/loading"));
const Menu = lazy(() => import("./menu/menu"));

const Home = () => {

	StaggeredScroll("normal");

	return <>
		<div class="w-screen overflow-hidden min-h-screen shadow-[inset_0_0_100px_20px_#00a3ff12]">
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