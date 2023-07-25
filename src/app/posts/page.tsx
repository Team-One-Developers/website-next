import Link from 'next/link'
import { allBlogs, Blog } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

import { Mdx } from '@/components/MdxComponents'

function BlogCard(blog: Blog) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={blog.slug}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {blog.title}
        </Link>
      </h2>
      <time dateTime={blog.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(blog.date), 'LLLL d, yyyy')}
      </time>
      {/* <Mdx code={blog.body.code} /> */}
    </div>
  )
}

export default function Home() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} />
      ))}
    </div>
  )
}
