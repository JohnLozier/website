import pocketBase from "./pocketBase";

const Comment = async (post: string, name: string, content: string) => {
	return (await pocketBase.collection("comments")).create({
		post: post,
		name: name,
		content: content,
		admin: "dfgdf"
	});
};

export default Comment;