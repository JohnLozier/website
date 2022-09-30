import Comment from "./src/comment";
import GetPost from "./src/getPost";
import LikeComment from "./src/likeComment";
import LikePost from "./src/likePost";
import cors from "cors"
import express from "express";
import firebase from "./src/firebase";
import { getFirestore } from "firebase/firestore";
import ratelimit from "./src/ratelimit";

firebase();

const app = express();
const db = getFirestore();

app.use(express.json({
	limit: "1kb"
}));

app.use(express.urlencoded({
	limit: "1kb"
}));

app.use(cors());

Comment(app, db, ratelimit(3, "1m"));
GetPost(app, db, ratelimit(100, "10m"));
LikePost(app, db, ratelimit(100, "10m"));
LikeComment(app, db, ratelimit(100, "10m"));

export default app;