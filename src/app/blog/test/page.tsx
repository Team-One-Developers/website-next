import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import { Mdx } from "@/components/MdxComponents"

function PostCard(post: Post) {
	return (
		<div className="mb-8">
			<h2 className="mb-1 text-xl">
				<Link href={post.slug} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
					{post.title}
				</Link>
			</h2>
			<time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
				{format(parseISO(post.date), "LLLL d, yyyy")}
			</time>
			{/* <Mdx code={post.body.code} /> */}
		</div>
	)
}

export default function Home() {
	const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

	return (
		<div className="mx-auto max-w-xl py-8">
			<h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
			{posts.map((post, idx) => (
				<PostCard key={idx} {...post} />
			))}
		</div>
	)
}