import { For, createEffect, createResource, createSignal, lazy } from "solid-js";

import GetComments from "../../../../api/getComments";
import Loading from "../../../assets/svgs/loading.svg";
import RealTimeComments from "../../../../api/realtimeComments";
import { useLocation } from "@solidjs/router";
import { wait } from "../../../lib/utils";

const Comment = lazy(() => import("./comment"));

const LoadComments = () => {

	const [ comments, { mutate } ] = createResource(useLocation().pathname.match(/[^/]*$/)![0], GetComments);
	const [ hidden, setHidden ] = createSignal(false)

	RealTimeComments(mutate);

	createEffect(() =>
		comments() ? wait(() => setHidden(true), "0.5s") : null
	);

	return <>
		<div class={ `${ comments() ? "!opacity-0" : "" } ${ hidden() ? "hidden" : "" } animate-appear transition-opacity duration-500` }>
			<Loading />
		</div>
		<For each={ comments() }>
			{ ({ name, content, created, admin }, index) =>
				<Comment name={ name } content={ content } created={ created } admin={ admin } index={ index() } />
			}
		</For>
	</>
};

export default LoadComments;