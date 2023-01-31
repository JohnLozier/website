import { sameLine, wait } from "../lib/utils";

import type { Dayjs } from "dayjs";
import dayJS from "dayjs";
import { onMount } from "solid-js";

const Cursor = () => {
	
	let cursor: HTMLDivElement;

	let started = false; // prevent animation moving to start pos
	let timePassed: Dayjs; // allow full click animation to play

	const setPos = (x: number, y: number, down: Boolean) => {
		cursor.classList.remove("hidden");

		Array.from(document.querySelectorAll(":hover")).filter(node =>
			node.classList.contains("pointer") || node.tagName == "A"
		).length && !down && (timePassed?.diff(dayJS()) ?? 0) <= 0 ?
			sameLine(() => cursor.style.height = "2.5rem", () => cursor.style.width = "2.5rem") :
			sameLine(() => cursor.style.removeProperty("width"), () => cursor.style.removeProperty("height"));
		
		started ? cursor.animate({
			transform: `translate(calc(${ x }px - 50%), calc(${ y }px - 50%))`
		}, {
			duration: 400,
			fill: "forwards"
		}) : cursor.style.transform = `translate(calc(${ x }px - 50%), calc(${ y }px - 50%))`;

		started = true;
	};

	onMount(() => {
		document.documentElement.onmousemove = ({ clientX, clientY, buttons }) =>
			setPos(clientX, clientY, buttons == 1);

		document.documentElement.onmousedown = () => {
			timePassed = dayJS().add(200, "ms");

			cursor.style.removeProperty("width");
			cursor.style.removeProperty("height");
		};

		document.documentElement.onmouseup = ({ buttons }) =>
			wait(() => Array.from(document.querySelectorAll(":hover")).filter(node =>
				node.classList.contains("pointer") || node.tagName == "A"
			).length && buttons != 1 ?
				sameLine(() => cursor.style.height = "2.5rem", () => cursor.style.width = "2.5rem") : null,
				Math.max(timePassed.diff(dayJS()), 0).toString()
			);
	});

	return <div ref={ cursor! } class="w-8 h-8 md:visible invisible pointer-events-none fixed bg-black invert mix-blend-difference z-10 rounded-full transition-size ease-in-out duration-200 hidden" />
};

export default Cursor;
