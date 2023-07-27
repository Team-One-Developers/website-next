import { Metadata } from 'next'
import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { twJoin } from 'tailwind-merge'

import { Image } from '@/components/atoms/Image'
import Typography from '@/components/atoms/Typography'

import { PageLayout } from '@/components/layout/PageLayout'

export const metadata: Metadata = {
  title: 'Blog',
}

const Blog = () => {
  const BlogArticle = ({
    title,
    subtitle,
    date,
    image,
    imageAlt,
    swapped,
    slug,
  }: {
    title: string
    subtitle: string
    date: string
    image: string
    imageAlt: string
    swapped?: boolean
    slug: string
  }) => {
    return (
      <div className="grid h-[400px] grid-flow-row grid-cols-[1fr_1fr]">
        <div
          className={twJoin(
            'relative h-full w-full bg-primary text-black',
            swapped ? 'order-2 rounded-r-blog' : 'order-1 rounded-l-blog'
          )}
        >
          <Image
            src={image}
            style={{
              borderTopLeftRadius: swapped ? '0px' : '20px',
              borderBottomLeftRadius: swapped ? '0px' : '20px',
              borderTopRightRadius: swapped ? '20px' : '0px',
              borderBottomRightRadius: swapped ? '20px' : '0px',
            }}
            alt={imageAlt}
            className="h-full"
            background="auto"
          />
        </div>
        <div
          className={twJoin(
            'flex flex-col justify-center  bg-t1-darkGray p-6',
            swapped ? 'order-1 rounded-l-blog' : 'order-2 rounded-r-blog'
          )}
        >
          <time dateTime={date} className="mb-2 block text-xs text-gray-300">
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>
          <p className="text-bold text-xl">{title}</p>
          <p className="mt-4 text-base">{subtitle}</p>
          <Link
            href={slug}
            className="text-bold mt-8 self-start rounded-[3px] border-none bg-primary px-[14px] py-[10px] font-spacegrotesk text-base leading-[14px] text-black shadow-none outline-none"
          >
            Read more
          </Link>
        </div>
      </div>
    )
  }

  return (
    <PageLayout>
      <div className="min-h-screen">
        <div className="w-full rounded p-24">
          <div className="max-w-[80%]">
            <Typography as="h1" variant="h2">
              {'Read our blog'}
            </Typography>
            <Typography as="h2" variant="h5" className="text-primary">
              {'Regular posts about topics that drive us'}
            </Typography>
          </div>
        </div>
        <div className="grid w-full grid-flow-row grid-cols-[1fr_3fr] gap-8 p-24">
          <div>
            <div className="sticky top-[140px] rounded border border-primary p-4">
              <h2 className="text-2xl">Filter</h2>
            </div>
          </div>
          <div className="flex flex-col gap-12 px-24">
            {allBlogs.map((blog, index) => {
              return (
                <BlogArticle
                  key={index}
                  title={blog.title}
                  date={blog.date}
                  subtitle={blog.description}
                  slug={blog.slug}
                  image="/images/t1d_nov22_202.jpg"
                  imageAlt="lazy man picture"
                />
              )
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Blog
