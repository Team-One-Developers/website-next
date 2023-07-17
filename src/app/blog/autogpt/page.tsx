import Image from 'next/image'

import { PageLayout } from '@/components/layout/PageLayout'

const Blog = () => {
  const RelatedArticle = ({
    title,
    subtitle,
    iconText,
  }: {
    title: string
    subtitle: string
    iconText: string
  }) => {
    return (
      <div className="grid grid-flow-row grid-cols-[4rem_1fr] gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded bg-primary text-black">
          {iconText}
        </div>
        <div>
          <p className="text-bold text-sm">{title}</p>
          <p className="text-xs">{subtitle}</p>
        </div>
      </div>
    )
  }

  const BlogBlockHeadline = ({ title }: { title: string }) => {
    return <h2 className="text-4xl">{title}</h2>
  }

  const BlogBlockText = ({ text }: { text?: string }) => {
    return (
      <p className="text-justify text-lg leading-8">
        {text
          ? text
          : `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
      </p>
    )
  }

  return (
    <PageLayout>
      <div className="min-h-screen">
        <div className="w-full rounded p-24">
          <div className="max-w-[80%]">
            <h1 className="text-6xl font-medium">
              {"AutoGPT - Magical omnipotent tool of the future or overhyped unpractical side-project? "}
            </h1>
            <h3 className="mt-4 text-4xl text-primary">
              {`The new tool called "AutoGPT" ist the new hot topic. What use does it actually have and is it worth learning?`}
            </h3>
            <p className="mt-4">Monday, 26th July 2023</p>
          </div>
          <div className="mt-16 flex items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-black">
              SB
            </div>
            <div className="ml-4">
              <p className="text-xl font-bold">Simon Broß</p>
              <p className="text-muted-foreground">Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="grid w-full gap-8 p-24 pt-0 lg:grid-cols-[1fr_600px_1fr] xl:grid-cols-[1fr_800px_1fr]">
          <div className="">
            <div className="sticky top-[140px] rounded border border-primary p-4">
              <h3 className="text-xl font-bold">Table of Content</h3>

              <ul className="mt-4 flex flex-col gap-1">
                <li>- What is AutoGPTs goal? </li>
                <li>- How to use it?</li>
                <li>- How good it is for its purpose?</li>
                <li>- Is it futureproof?</li>
                <li>- How can it improve everydaylife?</li>
                <li>- Conclusion</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <BlogBlockHeadline title="AutoGPT - What is its goal?" />
            <BlogBlockText />
            <BlogBlockHeadline title="How to use it?" />
            <BlogBlockText />
            <BlogBlockHeadline title="How good it is for its purpose?" />
            <BlogBlockText />
            <BlogBlockHeadline title="Is it futureproof?" />
            <BlogBlockText />
            <BlogBlockHeadline title="How can it improve everydaylife?" />
            <BlogBlockText />
            <BlogBlockHeadline title="Conclusion" />
            <BlogBlockText />
          </div>
          <div>
            <div className="sticky top-[140px] flex flex-col gap-4">
              <h3 className="text-2xl">Mentioned articles:</h3>
              <RelatedArticle
                iconText="TOD"
                title="Is Team One Developers?"
                subtitle="Insights into the work-life"
              />
              <RelatedArticle
                iconText="JID"
                title="Tauren Spa ist ein must-visit"
                subtitle="Urlaub in Österreich? Tauren Spa ist ein MUST-VISIT!"
              />
              <RelatedArticle
                iconText="ZDH"
                title="Geht ein Keks die Treppe runter, unten merkt er, er hat garkeine
                Füße."
                subtitle="Geht er die Treppe wieder hoch."
              />
              <RelatedArticle
                iconText="RSF"
                title="Expedition Maisi Flitzer"
                subtitle="Jetzt Mais-Salat essend den Berg runter mit 150 KM/h"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Blog
