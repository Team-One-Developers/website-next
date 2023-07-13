'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FONT_CONFIGS } from '@/constants'
import { twJoin } from 'tailwind-merge'

import { Heading } from '@/components/atoms/Heading'

import { PageLayout } from '@/components/layout/PageLayout'

export const Blog = () => {
  const router = useRouter()

  const BlogArticle = ({
    title,
    subtitle,
    text,
    image,
    imageAlt,
    swapped,
  }: {
    title: string
    subtitle: string
    text: string
    image: string
    imageAlt: string
    swapped?: boolean
  }) => {
    return (
      <div
        className="grid h-[400px] grid-flow-row grid-cols-[1fr_1fr]"
        onClick={() => router.push('/blog/autogpt')}
      >
        <div
          className={twJoin(
            'relative h-full w-full bg-t1-green text-t1-black',
            swapped ? 'order-2 rounded-r-blog' : 'order-1 rounded-l-blog'
          )}
        >
          <Image
            src={image}
            style={{
              objectFit: 'cover',
              overflow: 'hidden',
              borderTopLeftRadius: swapped ? '0px' : '20px',
              borderBottomLeftRadius: swapped ? '0px' : '20px',
              borderTopRightRadius: swapped ? '20px' : '0px',
              borderBottomRightRadius: swapped ? '20px' : '0px',
            }}
            alt={imageAlt}
            fill
          />
        </div>
        <div
          className={twJoin(
            'flex flex-col justify-center  bg-t1-darkGray p-6',
            swapped ? 'order-1 rounded-l-blog' : 'order-2 rounded-r-blog'
          )}
        >
          <p className="text-bold text-xl">{title}</p>
          <p className="mt-4 text-base">{subtitle}</p>
          <button
            className="text-bold mt-8 self-start rounded-[3px] border-none bg-t1-green px-[14px] py-[10px] font-SpaceGroteskRegular text-base leading-[14px] text-t1-black shadow-none outline-none"
            onClick={() => router.push('/blog/autogpt')}
          >
            Read more
          </button>
        </div>
      </div>
    )
  }

  return (
    <PageLayout>
      <div className="min-h-screen">
        <div className="w-full rounded p-24">
          <div className="max-w-[80%]">
            <Heading
              tag="h1"
              fontDefaults={FONT_CONFIGS.desktop_h2_regular}
            >{`Read our blog`}</Heading>
            <Heading
              tag="h2"
              fontDefaults={FONT_CONFIGS.desktop_h5}
              colorClassName="text-t1-green"
            >{`Regular posts about topics that drive us`}</Heading>
          </div>
        </div>
        <div className="grid w-full grid-flow-row grid-cols-[1fr_3fr] gap-8 p-24">
          <div>
            <div className="sticky top-[140px] rounded border border-t1-green p-4">
              <h2 className="text-2xl">Filter</h2>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <BlogArticle
              title="AutoGPT - Magical omnipotent tool of the future or overhyped unpractical side-project?"
              subtitle='The new tool called "AutoGPT" ist the new hot topic. What use does it actually have and is it worth learning?'
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              image="/images/lazy-man.png"
              imageAlt="lazy man picture"
            />{' '}
            <BlogArticle
              swapped
              title="AutoGPT - Magical omnipotent tool of the future or overhyped unpractical side-project?"
              subtitle='The new tool called "AutoGPT" ist the new hot topic. What use does it actually have and is it worth learning?'
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              image="/images/t1d_nov22_153.jpg"
              imageAlt="poeple pic"
            />{' '}
            <BlogArticle
              title="AutoGPT - Magical omnipotent tool of the future or overhyped unpractical side-project?"
              subtitle='The new tool called "AutoGPT" ist the new hot topic. What use does it actually have and is it worth learning?'
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              image="/images/t1d_nov22_185.jpg"
              imageAlt="people picture"
            />{' '}
            <BlogArticle
              swapped
              title="AutoGPT - Magical omnipotent tool of the future or overhyped unpractical side-project?"
              subtitle='The new tool called "AutoGPT" ist the new hot topic. What use does it actually have and is it worth learning?'
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              image="/images/t1d_nov22_202.jpg"
              imageAlt="dinosaur"
            />{' '}
            <BlogArticle
              title="AutoGPT - Magical omnipotent tool of the future or overhyped unpractical side-project?"
              subtitle='The new tool called "AutoGPT" ist the new hot topic. What use does it actually have and is it worth learning?'
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              image="/images/man-laptop.jpg"
              imageAlt="laptop picture"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Blog
