import { createEffect, createSignal } from "solid-js";

import Item from "./item";
import { sameLine } from "../../lib/utils";

const Menu = () => {

	let background: HTMLDivElement;
	let menu: HTMLDivElement;

	const [hidden, setHidden] = createSignal(true);

	createEffect(() => {
		
		background.classList.remove("hidden"); // Prevent animation from playing on page load

		hidden() ? sameLine(
			() => menu.children[0].children[0].classList.remove("rotate-35", "translate-y-exit"),
			() => menu.children[0].children[1].classList.replace("left-0", "left-1"),
			() => menu.children[0].children[1].classList.remove("opacity-0"),
			() => menu.children[0].children[2].classList.remove("-rotate-35", "-translate-y-exit"),
			() => background.classList.add("pointer-events-none"),
			() => background.classList.replace("opacity-60", "opacity-0")
		) : sameLine(
			() => menu.children[0].children[0].classList.add("rotate-35", "translate-y-exit"),
			() => menu.children[0].children[1].classList.replace("left-1", "left-0"),
			() => menu.children[0].children[1].classList.add("opacity-0"),
			() => menu.children[0].children[2].classList.add("-rotate-35", "-translate-y-exit"),
			() => background.classList.remove("pointer-events-none"),
			() => background.classList.replace("opacity-0", "opacity-60")
		);
	});
	
	return <>
		<div ref={ menu! } class="group w-12 h-12 fixed top-0 left-0 flex items-center justify-center pointer z-[2]" onClick={ () => setHidden(current => !current) }>
			<div class="flex flex-col gap-1.5 group">
				<div class="transition-[rotate, transform] relative -top-12 animate-menu animation-delay-400 duration-1000 bg-white w-8 h-0.75" />
				<div class="transition-[opacity, left] relative left-1 -top-12 animate-menu animation-delay-200 duration-1000 bg-white w-8 h-0.75" />
				<div class="transition-[rotate, transform] relative -top-12 animate-menu duration-1000 bg-white w-8 h-0.75" />
			</div>
		</div>
		<div ref={ background! } class="w-screen h-screen opacity-0 hidden pointer-events-none bg-black z-[1] fixed transition-opacity duration-1000" onClick={ () => setHidden(true) }>
			<div class="top-10 left-4 relative w-fit">
				<Item hidden={ hidden } name="Homepage" link="/" delay={ 0 }/>
				<Item hidden={ hidden } name="Blog" link="/blog" delay={ 250 }/>
				<Item hidden={ hidden } name="Github" link="https://github.com/JohnLozier" delay={ 500 }/>
			</div>
		</div>
	</>
};

export default Menu;