const Home = lazy(() => import("../src/components/home"));

import { MetaProvider as Head } from "@solidjs/meta";
import { lazy } from "solid-js";

const Index = () => {
	return (
		<>
			<Head>
				<title>John Lozier</title>
			</Head>
			<Home />
		</>
	)
};

export default Index;