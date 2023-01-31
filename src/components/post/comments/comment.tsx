// import { FiChevronDown, FiChevronUp } from "solid-icons/fi"

import BadWords from "bad-words";
import DayJS from "dayjs";
import { createAvatar } from "@dicebear/core";
import { identicon } from "@dicebear/collection";

const Comment = (props: { name: string, content: string, admin: Boolean, created: Date, index: number }) => {

	const Filter = new BadWords();

	return <div class="flex max-w-[44rem] w-full animate-appear animation-direction opacity-0 animation-duration-500" style={ {
		"animation-delay": `${ 500 + props.index * 200 }ms`
	} }>
		{/* For future like/dislike system with different database */}
		{/* <div class="flex flex-col gap-2 absolute -translate-x-6 mt-6">
			<FiChevronUp class="pointer hover:scale-150 duration-500 transition-transform" color="black" size={ 16 } />
			<FiChevronDown class="pointer hover:scale-150 transition-transform" color="black" size={ 16 } />
		</div> */}
		<div class="block h-12 w-12 self-center mr-4" innerHTML={
			createAvatar(identicon, {
				seed: props.name.toUpperCase()
			}).toString()
		}/>
		<div class="max-w-[40rem] w-full min-h-24 border-gray-300 p-2 text-gray-500 font-semibold font-opensans outline-none border rounded-md">
			<div class="flex ml-2 items-center">
				<h1 class={ `${ props.admin ? "text-yellow-500" : "text-gray-600" } text-xl font-extrabold font-montserrat uppercase` }>{ Filter.clean(props.name) }</h1>
				<span class="font-montserrat font-bold mx-2 bg-gray-600 w-1 h-1 rounded-full"/>
				<h6 class="text-gray-400 font-montserrat text-base font-semibold uppercase">{ DayJS().to(props.created) }</h6>
			</div>
			<p class="mx-4 mt-2 font-opensans font-semibold">{ Filter.clean(props.content) }</p>
		</div>
	</div>
}

export default Comment;