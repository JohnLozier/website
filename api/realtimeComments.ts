import type Comments from "./types/comments";
import type { Setter } from "solid-js";
import pocketBase from "./pocketBase";

const RealTimeComments = async (mutate: Setter<Comments[]>) => {
	await pocketBase.collection("comments").subscribe("*", ({ action, record }: { action: string, record: Comments }) => {
		action == "create" ? mutate(current => [record, ...current]) :
		action == "delete" ? mutate(current => current.filter(({ id }) =>
			id != record.id
		)) :
		action == "update" ? mutate(current => current.map(node =>
			node.id == record.id ? record : node
		)) : null
	})
};

export default RealTimeComments