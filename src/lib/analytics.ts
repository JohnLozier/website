import { inject } from "@vercel/analytics";

global.process.env.NODE_ENV = import.meta.env.MODE;

const Analytics = () => {

	inject();
};

export default Analytics;