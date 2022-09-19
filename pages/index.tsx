import { MetaProvider as Head } from "@solidjs/meta";
import Home from "../src/components/home";

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