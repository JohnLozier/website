import { FiAlertTriangle, FiX } from "solid-icons/fi";

import { onMount } from "solid-js";
import { wait } from "../lib/utils";

const Error = () => {
	let Error: HTMLDivElement;

	onMount(() =>
		Error.classList.replace("hidden", "flex")
	);

	return <div ref={ Error! } class="absolute animate-slide-down bg-red-400 animation-delay-500 -translate-y-full hidden w-full items-center justify-center transition-opacity duration-500 top-0">
		<h1 class="text-2xl text-center font-montserrat font-bold text-red-100 mx-auto py-4">
			Sorry we were unable to find that page
			<FiAlertTriangle class="inline ml-2 justify-self-start" size="2.3rem"/>
		</h1>
		<FiX class="!text-red-200/80 justify-self-end w-9 h-9 pointer hover:w-12 hover:h-12 hover:-ml-3 transition-[size, margin] duration-300" onClick={ () => {
			Error.classList.add("opacity-0");
			wait(() => Error.remove(), "0.5s");
		} }/>
	</div>
};

export default Error;