const analytics = import.meta.env.MODE != "development" ? import("@vercel/analytics") : null;

const Analytics = async() => {
	(await analytics)?.inject()
};

export default Analytics;