import { createSignal, onMount } from 'solid-js';

const Parallax = () => {

	const [scroll, setScroll] = createSignal(0);

	onMount( () =>
		document.onscroll = () => 
			setScroll(window.scrollY)
	);

	return <div class="bg-dotted bg-[length:2rem_2rem] fixed top-0 w-screen h-screen pointer-events-none bg-background -z-[1]" style={ {
		"background-position-y": `${ Math.round(-scroll()) / 2 }px`,
	} }>
	</div>
};

export default Parallax;