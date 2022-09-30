import { TimeString } from "../types/utils";
import { getMs } from "../lib/utils";
import ratelimit from 'express-rate-limit';

const RateLimit = (amount: number, time?: TimeString) =>
	ratelimit({
		windowMs: time ? getMs(time) : 60000,
		max: amount,
		keyGenerator: (req) => req.headers["x-real-ip"] as string
	});

export default RateLimit;