import Line from "../line";
import Post from "./post";

const Comments = () => {
	return <>
		<Line />
		<h1 class="font-montserrat mt-6 uppercase font-extrabold text-4xl text-gray-700">Comments</h1>
		<div class="justify-center flex mt-10">
			<Post />
		</div>
	</>
};

export default Comments;