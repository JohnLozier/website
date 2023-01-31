import { lazy } from "solid-js";

const Line = lazy(() => import("../line"));
const LoadComments = lazy(() => import("./loadComments"));
const Post = lazy(() => import("./post"));

const Comments = () => {
	return <>
		<Line />
		<h1 class="font-montserrat animate-appear mt-6 uppercase font-extrabold text-4xl text-gray-700">Comments</h1>
		<div class="items-center flex mt-10 flex-col mb-24">
			<Post />
			<div class="flex flex-col items-center gap-10 w-full">
				<LoadComments />
			</div>
		</div>
	</>
};	

export default Comments;