import Error from "../components/error";
import Home from "../components/home";
import { Title } from "@solidjs/meta";

const FourOFour = () => {
	return <>
		<Home />
		<Error />
		<Title>404</Title>
	</>
};

export default FourOFour;