import { Route, Routes } from "@solidjs/router";

import Blog from "./pages/blog";
import FourOFour from "./pages/404";
import Index from "./pages/index";
import Post from "./pages/post";

const Posts = import.meta.glob("./assets/posts/*.md", {
	as: "raw"
});

const Router = () => {
	return <Routes>
		<Route path="*" component={ FourOFour } />
		<Route path="/" component={ Index } />
		<Route path="/blog" component={ Blog } />
		{
			Object.keys(Posts).map(post =>
				<Route path={ `/posts/${ post.match(/[^/.]+(?=\.)/)![0] }` } component={ Post } />
			)
		}
	</Routes>
};

export default Router;