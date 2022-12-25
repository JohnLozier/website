import "highlight.js/styles/atom-one-dark.css";

import type { FrontMatterResult } from "front-matter";
import Highlight from "highlight.js/lib/core";
import Line from "./line";
import MarkDown from "markdown-it";
import type Markdown from "../../types/posts";
import type { Resource } from "solid-js";
import dayJS from "dayjs"
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";

Highlight.registerLanguage("javascript", javascript);
Highlight.registerLanguage("typescript", typescript);

const Content = (props: { content: Resource<FrontMatterResult<Markdown>> }) => {

	const MD = new MarkDown({
		html: true,
		highlight: (content: string, lang: string) =>
			Highlight.highlight(content, { language: lang }).value
	});

	return <>
		<div class="my-8">
			<h1 class="text-4xl xsm:text-5xl sm:text-7xl font-black animate-blog font-montserrat w-min text-gray-800 uppercase mb-3">{ props.content()?.attributes.title }</h1>
			<Line />
			<h3 class="text-gray-400 mt-2 font-montserrat font-medium text-md">{ dayJS(props.content()?.attributes.date).format("MMMM D, YYYY").split("").map((letter, index) =>
				<span class="animate-opacity opacity-0 animation-delay-500" style={ {
					"animation-delay": `${ index * 100 }ms`
				} }>{ letter }</span>
			) }</h3>
		</div>
		<div class="[&>*:not(pre)>code]:bg-[#23272e] [&>*:not(pre)>code]:p-1 [&>*:not(pre)>code]:rounded-md [&>pre]:bg-[#23272e] [&_a]:text-sky-500 [&_a]:inline-block [&_a]:duration-500 [&_a]:cursor-none [&_a:hover]:text-sky-700 [&_a]:transition-colors [&>pre]:text-stone-300 [&>pre]:p-3 [&>pre]:rounded-md [&>*:not(pre)>code]:text-stone-300 [&_*]:animate-blog [&_*]:animate mb-10 [&_h2]:text-montserrat [&_h2]:uppercase [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2:not(:first-child)]:mt-16 [&_h3]:text-montserrat [&_h3]:uppercase [&_h3]:text-lg [&_h3]:font-extrabold [&_*]:my-3 [&_h2]:text-gray-600 [&_h3]:text-gray-500 [&_p]:ml-3 [&_p]:text-slate-500 [&_p]:font-openSans [&_p]:font-medium [&_li]:ml-6 [&_pre]:break-all [&_pre]:whitespace-pre-wrap" innerHTML={ props.content() ? MD.render(props.content()?.body) : "" }/>
	</>
};

export default Content;