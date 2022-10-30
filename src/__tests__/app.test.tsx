import FourOFour from "../../pages/404";
import Index from "../../pages/index";

test("Renders index correctly", () =>
	expect(Index()).toBeTruthy()
);

test("Renders 404 correctly", () =>
	expect(FourOFour()).toBeTruthy()
);