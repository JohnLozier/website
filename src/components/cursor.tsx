import { sameLine } from "../lib/utils";

const Cursor = () => {
	
	let cursor: HTMLDivElement;

	const setPos = (x: number, y: number) => {
		cursor.classList.remove("hidden");

		Array.from(document.querySelectorAll(":hover")).filter(node =>
			node.classList.contains("pointer")
		).length ?
			sameLine(() => cursor.style.height = "2.5rem", () => cursor.style.width = "2.5rem") :
			sameLine(() =>  cursor.style.removeProperty("width"), () => cursor.style.removeProperty("height"));

		cursor.style.left = `${ x }px`;
		cursor.style.top = `${ y }px`;
	};

	document.onmouseover = ({ clientX, clientY }) =>
		setPos(clientX, clientY);
	
	document.documentElement.onmousemove = ({ clientX, clientY }) =>
		setPos(clientX, clientY);

	document.documentElement.onmouseleave = () =>
		cursor.classList.add("hidden");

	return <div ref={ cursor! } class="w-8 h-8 -translate-x-1/2 -translate-y-1/2 pointer-events-none fixed bg-black invert mix-blend-difference z-10 rounded-full transition-size duration-500 ease-in-out hidden" />
};

export default Cursor;