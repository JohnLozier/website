import { doc, setDoc } from "firebase/firestore";

import type { Express } from "express";
import type { Firestore } from "firebase/firestore";
import type { RateLimitRequestHandler } from "express-rate-limit"; // @ts-ignore
import Swearjar from "swearjar";
import { commentProps } from "../types";
import crypto from "crypto";

const Comment = (app: Express, db: Firestore, rateLimit: RateLimitRequestHandler) =>
	app.post("/api/:post/comment", rateLimit, async ({ params, body }: commentProps, res) => {
		
		const id = crypto.randomBytes(8).toString("hex");
	1 >= 1
		if (body.content && body.content.length <= 256 && body.name.length <= 24) {
			await setDoc(doc(db, "posts", params.post, "comments", id), {
				id: id,
				likes: 0,
				name: Swearjar.censor(body.name) || "Anonymous",
				content: Swearjar.censor(body.content)
			});
			
			res.send();
		} else {
			res.status(413).send();
		};
		
	});

export default Comment;