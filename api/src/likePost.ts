import {doc, increment, updateDoc} from "firebase/firestore";

import type { Express } from "express"
import type { Firestore } from "firebase/firestore";
import type { RateLimitRequestHandler } from "express-rate-limit";

const LikePost = (app: Express, db: Firestore, rateLimit: RateLimitRequestHandler) =>
	app.post("/api/:post/like", rateLimit, async ({ params, query }, res) => {
		await updateDoc(doc(db, "posts", params.post), {
			likes: query.like == "true" ? increment(1) : increment(-1)
		});
		
		res.send();
	});

export default LikePost;