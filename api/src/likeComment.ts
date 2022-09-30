import { Firestore, doc, increment, updateDoc } from 'firebase/firestore';

import type { Express } from "express";
import type { RateLimitRequestHandler } from "express-rate-limit";

const LikeComment = (app: Express, db: Firestore, rateLimit: RateLimitRequestHandler) =>
	app.post("/api/:post/:comment/like", rateLimit, async ({ params, query: fetchQuery }, res) => {
		await updateDoc(
			doc(db, "posts", params.post, "comments", params.comment),
			{
				likes: fetchQuery.like == "true" ? increment(1) : increment(-1)
			}
		);
		
		res.send();
	});

export default LikeComment;