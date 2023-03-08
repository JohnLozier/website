import type Post from "../../types/posts";
import dayJS from "dayjs";
import { lazy } from "solid-js";
import matter from "front-matter";

const Item = lazy(() => import("./item"));
const files = import.meta.glob("../../assets/posts/*.md", {
	eager: true,
	as: "raw"
});


const Posts = (props: { delay?: boolean }) => {
	return <div class="flex flex-col items-center mb-40 gap-12">
		{
			Object.values(files).sort((a ,b) =>
				dayJS(matter<Post>(b).attributes.date).valueOf() - dayJS(matter<Post>(a).attributes.date).valueOf()
			).map((post, index) =>
				<Item path={ Object.keys(files)[Object.values(files).indexOf(post)].match(/[^/.]+(?=\.)/)![0] } title={ matter<Post>(post).attributes.title } text={ matter<Post>(post).attributes.preview } date={ matter<Post>(post).attributes.date } image={ matter<Post>(post).attributes.image } alt={ matter<Post>(post).attributes.alt } delay={ props.delay ? index : undefined }/>
			)
		}
	</div>
};

export default Posts;