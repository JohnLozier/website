import Comment from "../../../../api/comment";
import DayJS from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useLocation } from "@solidjs/router";

DayJS.extend(localizedFormat);

const Post = () => {

	let username: HTMLInputElement;
	let content: HTMLTextAreaElement;

	const post = useLocation().pathname.match(/[^/]*$/)![0]
	

	return <div class="mb-6 max-w-[40rem] w-full flex animate-appear flex-col">
		<div class="flex">
			<input ref={ username! } maxLength={ 24 } placeholder="Name" class="ml-2 w-52 sm:w-64 mb-3 inline border-none text-xl text-gray-600 caret-gray-600 [&:placeholder-shown]:caret-gray-300 font-bold font-montserrat uppercase outline-none pointer cursor-none border-2 rounded-md resize-none"/>
			<h6 class="text-gray-400 font-montserrat font-semibold uppercase ml-auto">{ DayJS().format("lll") }</h6>
		</div>
		<textarea ref={ content! } maxLength={ 256 } placeholder="Add to Discussion" class="w-full h-24 border-gray-300 p-2 text-gray-500 caret-gray-500 [&:placeholder-shown]:caret-gray-300 font-semibold font-opensans outline-none pointer cursor-none border rounded-md resize-none"/>
		<button class="self-end mr-6 mt-2 px-6 py-3 text-white font-montserrat font-bold pointer cursor-none shadow-lg rounded-lg bg-blue-400/40 active:translate-y-[0.1rem] active:shadow-md hover:bg-blue-600/50 transition-[colors,transform]" onClick={ () => {
			Comment(post, username.value, content.value);
			username.value = "";
			content.value = "";
		} }>Post</button>
	</div>
}

export default Post;