import { RemoveMenu } from "../menu/menu";
import { ShowLoading } from "../post/loading";
import { createEffect } from "solid-js";
import dayJS from "dayjs";
import isVisable from "../../lib/transitions";

const Item = (props: { path: string, title: string, text: string, date: string, image: string, delay?: number }) => {
	let post: HTMLHeadingElement;

	const shown = isVisable(() => post);

	createEffect(() =>
		shown() ? post.classList.add("animate-post") : null
	);

	return <div ref={ post! } style={ {
		"animation-delay": `${ (props.delay ?? 0) * 300 }ms`
	} } onClick={ () => {
		ShowLoading(`/posts/${ props.path }`);
		RemoveMenu();
	} } class="max-w-[55rem] pointer opacity-0 sm:flex-row flex-col flex hover:bottom-3 bottom-0 relative min-h-52 bg-dark duration-500 transition-[transform,bottom] shadow-[0_25px_15px_-7px_#0000004d] px-6 pt-3 rounded-2xl mx-6">
		<div class="flex flex-col max-w-full mr-4 ml-2 gap-2">  
			<h1 class="text-subtitle uppercase select-none w-fit h-fit text-3xl sm:text-4xl hover:text-[2.4rem] duration-500 transition-[font-size] font-montserratd font-bold drop-shadow-[0_0_10px_#dcdcdc66]">{ props.title }</h1>
			<p class="mx-3 font-medium text-xl text-gray-200 leading-tight font-openSans">{ props.text }</p>
			<span class="text-subtitle mt-auto mb-1 font-montserrat font-semibold">{ dayJS().to(dayJS(props.date)) }</span>
		</div>
		<div class="bg-highlight/70 min-w-[11rem] h-44 p-2 mb-3 self-center">
			<img class="hover:scale-105 transition-transform duration-500" draggable={ false } src={ `${ props.image }` } />
		</div>
	</div>
};

export default Item;