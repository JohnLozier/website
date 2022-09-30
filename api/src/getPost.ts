import { Firestore, collection, doc, getDoc, getDocs } from "firebase/firestore";

import type { Express } from "express";
import type { RateLimitRequestHandler } from "express-rate-limit";

const GetPost = (app: Express, db: Firestore, rateLimit: RateLimitRequestHandler) =>
	app.get("/api/:post", rateLimit, async ({ params }, res) => {
		res.send({
			...(await getDoc(doc(db, "posts", params.post))).data(),
			"comments": (await getDocs(collection(db, `/posts/${ params.post }/comments`))).docs.map(doc =>
				doc.data()
			)
		});
	});

export default GetPost;