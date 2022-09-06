import { FiAlertTriangle, FiX } from "solid-icons/fi";

import { wait } from "../lib/utils";

const Error = () => {
	let Error: HTMLDivElement;

	return <div ref={ Error! } class="absolute bg-red-400 w-full h-14 flex items-center justify-center transition-top duration-500 top-0">
		<h1 class="text-2xl text-center font-montserrat font-bold text-red-100 mx-auto">
			Sorry we were unable to find that page
			<FiAlertTriangle class="inline ml-2 justify-self-start" size="2.3rem"/>
		</h1>
		<FiX class="text-red-100 justify-self-end cursor-pointer hover:text-red-200/80 transition-colors duration-300" onClick={ () => {
			Error.classList.remove("top-0");
			Error.classList.add("-top-14");
			wait(() => Error.remove(), "0.5s");
		} }size="2.3rem"/>
	</div>
};

export default Error;