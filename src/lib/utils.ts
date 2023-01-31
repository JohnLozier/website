import TimeString from "../types/utils";
import { createSignal } from "solid-js";

export const getMs = (time: TimeString) => {

	if (typeof time == "number")
		return time;

	const [number, type] = time.match(/[.\d]+|(\w+)/g)!;
	
	return parseFloat(number) * (
		type == "hs" ? 10 :
		type == "ts" ? 100 :
		type == "s" ? 1000 :
		type == "m" ? 60000 :
		type == "h" ? 3600000 :
		type == "d" ? 86400000 : 1
	);
};

export const wait = (func: Function, time: TimeString) =>
	setTimeout(() => func(),
		getMs(time)
	);

export const interval = (func: Function, time: TimeString) =>
	setInterval(() => func(),
		getMs(time)
	);

export const sameLine = (...func: Function[]) => {
	func.forEach(node => node());
};

export const WaitUntil = (ms: TimeString) => {
	const [ finished, setFinished ] = createSignal(false);

	setTimeout(() => setFinished(true), getMs(ms));

	return [finished];
};