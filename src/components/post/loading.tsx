import { createEffect, createSignal } from "solid-js";
import { sameLine, wait } from "../../lib/utils";

import { useNavigate } from "@solidjs/router";

const [ shown, setShown ] = createSignal<string | Boolean>(false);

// loading effect inspired by https://adriancasares.com
const Loading = () => {

	const navigate = useNavigate();

	setShown(false); // reset on page change
	
	createEffect(() => {
		shown() ? sameLine(
			() => document.documentElement.style.overflowY = "hidden",
			() => wait(() => {
					document.documentElement.removeAttribute("style");
					navigate(shown() as string);
				},
				"1.7s"
		)) : null
	});

	return <>
		{ shown() ?
			<div class={ `animate-loading shadow-[0_0_50px_75px_white] -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 fixed bg-white z-[2]` }/> : null
		}
	</>
};

export default Loading;

const ShowLoading = (url: string) =>
	setShown(url);

export { ShowLoading };