import Loading from "../components/post/loading";
import Menu from "../components/menu/menu";
import Parallax from "../components/parallax";
import Posts from "../components/blog/posts";
import { Title } from "@solidjs/meta";

const Blog = () => {
	return <>
		<Title>Blog - John Lozier</Title>
		<div class="min-h-screen w-screen flex flex-col">
			<h1 class="font-montserrat text-12xl animate-blog select-none font-extrabold self-center uppercase bg-gradient-to-br leading-none transition-[transform, filter] duration-500 from-fuchsia-500 to-sky-500 bg-clip-text text-transparent mb-16 drop-shadow-blog hover:drop-shadow-blogHover">Blog</h1>
			<Posts delay={ true } />
		</div>
		<Loading />
		<Parallax />
		<Menu />
	</>
	
};

export default Blog;