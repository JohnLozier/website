import { expect, test } from "vitest";

const Pages = import.meta.glob("../pages/*")

// test each page
Object.values(Pages).forEach((page, index) =>
	test(`Renders ${ Object.keys(Pages)[index].match(/(?<=\/)[^/]*(?=\.)/)![0] } Correctly`, async () =>
		expect(await page()).toBeTruthy()
	)
);