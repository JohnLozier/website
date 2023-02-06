import Comments from "../components/post/comments/comments";
import Content from "../components/post/content";
import Markdown from "../types/posts";
import Menu from "../components/menu/menu";
import StaggeredScroll from "../lib/scroll";
import { Title } from "@solidjs/meta";
import { createResource } from "solid-js";
import matter from "front-matter";
import { useLocation } from "@solidjs/router";

const Post = () => {

	const [ content ] = createResource(async () => {
		const res = await import(`../assets/posts/${ useLocation().pathname.match(/[^/]*$/)![0] }.md?raw`);

		return matter<Markdown>(res.default);
	});

	StaggeredScroll("custom", 300);

	return <>
		<Menu removed={ true } />
		<Title>{ content()?.attributes.title } - John Lozier</Title>
		<div class="bg-white w-screen min-h-screen flex justify-center">
			<div class="w-[50rem] max-w-full mx-5">
				<Content content={ content } />
				<Comments />
			</div>
		</div>
	</>
};

export default Post;