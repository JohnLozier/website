const Error = lazy(() => import("../src/components/error"));
const Home = lazy(() => import("../src/components/home"));

import { MetaProvider as Head } from "@solidjs/meta";
import { lazy } from "solid-js";

const FourOFour = () => {
	return <>
		<Head>
			<title>404</title>
		</Head>
		<Error />
		<Home />
	</>
};

export default FourOFour;