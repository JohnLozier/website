import type { Accessor } from "solid-js";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

const isVisable = (ref: () => Element, threshold?: number): Accessor<Boolean> =>
	createVisibilityObserver({
		threshold: threshold,
		rootMargin: "0px 100% 0px 100%",
	})(() => ref());

export default isVisable;