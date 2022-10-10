import { getMs, wait } from "../../../api/lib/utils";

test("GetMS", () => {
	const getRandomSecond = Math.floor(Math.random() * 100);
	expect(getMs(`${ getRandomSecond }s`)).toBe(getRandomSecond * 1000);

	const getRandomMin = Math.floor(Math.random() * 100);
	expect(getMs(`${ getRandomMin }m`)).toBe(getRandomMin * 60000)

	const getRandomHour = Math.floor(Math.random() * 100);
	expect(getMs(`${ getRandomHour }h`)).toBe(getRandomHour * 3600000);
});

test("wait", () => {
	const func = jest.fn();
	wait(func, "1s");
	expect(func).not.toBeCalled();
	setTimeout(() => expect(func).toBeCalled(), 1000);
});