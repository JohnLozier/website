import type Comments from "./types/comments";
import pocketBase from "./pocketBase";

const GetComments = async (post: string) =>
	(await pocketBase.collection("comments").getList<Comments>(1, 50, {
		sort: "-created",
		filter: `post = "${ post }"`
	})).items.map(({ name, content, created, id, admin }) => ({
		id,
		name,
		content,
		created,
		admin
	}));

export default GetComments;