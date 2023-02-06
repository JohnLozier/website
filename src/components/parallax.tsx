import { onMount } from "solid-js";

const Parallax = () => {
	let background: HTMLDivElement;

	onMount(() =>
		document.onscroll = () =>
			background.style.setProperty("--bg-offset", `-${ Math.round(window.scrollY / 2) }px`)
	);

	return <div ref={ background! } class="before:bg-dotted before:bg-[length:2rem_2rem] w-screen h-screen fixed before:h-[250%] before:w-[250%] before:-top-3/4 before:absolute before:rotate-45 before:-left-3/4 before:block top-0 pointer-events-none before:bg-[position:var(--bg-offset)_var(--bg-offset)] bg-background -z-[1]"/>
};

export default Parallax;