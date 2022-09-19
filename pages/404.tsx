import Error from "../src/components/error";
import { MetaProvider as Head } from "@solidjs/meta";

const FourOFour = () => {
	return <>
		<Head>
			<title>404</title>
		</Head>
		<Error />
	</>
};

export default FourOFour;