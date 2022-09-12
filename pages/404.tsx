import Construction from "../src/components/construction";
import Error from "../src/components/error";
import { MetaProvider as Head } from "@solidjs/meta";

const FourOFour = () => {
	// return <App>
		
	return <>
		<Head>
			<title>404</title>
		</Head>
		<Error />
		<Construction />
	</>
};

export default FourOFour;