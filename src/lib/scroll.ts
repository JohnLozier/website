import { createSignal } from "solid-js";

export const [index, setIndex] = createSignal(0);
const [ elements, setElements ] = createSignal<{[key: number]: () => HTMLElement}>({});

const StaggeredScroll = (type: "normal" | "screen" | "custom", amount?: number) => {

	document.documentElement.style.setProperty("--fancy-scroll", "hidden");

	let prevTime = 0,
		previousDeltaY = 0;

	// @ts-expect-error
	document.onwheel = ({ deltaY, timeStamp, wheelDeltaY }) => {
		if ((timeStamp > prevTime + (wheelDeltaY == -3 * deltaY ? type == "normal" ? 500 : (type == "screen" ? window.innerHeight : amount!) / 1.82 : type == "normal" ? 700 : (type == "screen" ? window.innerHeight : amount!) / 1.3) || deltaY / previousDeltaY < 0) && (deltaY > 5 || deltaY < -5)) {
			deltaY > 0 ? setIndex(current => current + 1) : setIndex(current => current - 1);
			setIndex(current => Math.max(0, Math.min(current, type != "normal" ? Math.ceil(document.documentElement.scrollHeight / (type == "screen" ? window.innerHeight : amount!)) : Object.entries(elements()).length - 1)));

			type != "normal" ? window.scrollTo({ behavior: "smooth", top: index() * (type == "screen" ? window.innerHeight : amount!) }) :
	elements()[index()]()?.scrollIntoView({ behavior: "smooth" });
			
			previousDeltaY = deltaY;
			prevTime = timeStamp;
		};
	};
};

export default StaggeredScroll;

export const addElement = (element: () => HTMLElement, index: number) =>
	setElements(current => ({
		...current,
		[index]: element
	}));