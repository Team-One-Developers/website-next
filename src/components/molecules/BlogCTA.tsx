import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { Image } from "../atoms/Image"
import { Link as LinkComponent } from "../atoms/Link"
import Typography from "../atoms/Typography"
import Icon, { IconProps } from "../molecules/Icon"
import { JobType } from "./JobType"
import CTA_BG from "/public/images/optimized/hero_optimized.webp"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_CAREERS } from "@/sanity/queries"
import { ALL_CAREER_QUERYResult } from "@/sanity/types"

type Variant = "CAREER" | "CONTACT" | "BLOG"

type BlogCTAValueObject = {
    [key in Variant]: {
        icon: IconProps["name"]
        iconSize: number
        subtitle: string
        headline: string
        text: string
        link: string
        linkLabel: string
    }
}

const BlogCTAValues = (allCareers: ALL_CAREER_QUERYResult): BlogCTAValueObject => {
    return {
        BLOG: {
            icon: "globe",
            iconSize: 18,
            subtitle: "Blog",
            headline: "Auf der Suche nach mehr spannenden Artikeln?",
            text: "Dann schau mal hier vorbei:",
            link: "/blog",
            linkLabel: "Blog"
        },
        CONTACT: {
            icon: "globe",
            iconSize: 18,
            subtitle: "Contact",
            headline: "Du möchtest Kontakt mit uns aufnehmen?",
            text: "Hier findest du die nötigen Informationen:",
            link: "/contact",
            linkLabel: "Contact"
        },
        CAREER: {
            icon: "person_small",
            iconSize: 18,
            subtitle: "Career",
            headline: allCareers[0].title || "",
            text: "",
            link: allCareers[0].slug?.current || "",
            linkLabel: "Zur Stellenanzeige"
        }
    }
}

interface BlogCTAProps {
    variant: Variant
    className?: string
}

export const BlogCTA = async ({ variant, className }: BlogCTAProps) => {
    const allCareers = await client.fetch(
        QUERY_ALL_CAREERS,
        {},
        { cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache" }
    )
    const blogCTAValues = BlogCTAValues(allCareers)

    return (
        <article
            className={twMerge("relative z-0 rounded-md p-8 transition-shadow hover:shadow-md", className)}
            aria-label={blogCTAValues[variant].linkLabel}
        >
            <Link
                href={blogCTAValues[variant].link}
                className="absolute left-0 top-0 z-10 size-full"
                aria-labelledby={`link-${blogCTAValues[variant].subtitle}`}
                aria-hidden
                tabIndex={-1}
            />
            <Image
                src={CTA_BG}
                className="absolute left-0 top-0 -z-10 rounded-md opacity-[90%]"
                alt="Background Image"
                fill
                placeholder="blur"
            />
            <div className="mb-4 flex items-center">
                <Icon
                    name={blogCTAValues[variant].icon}
                    height={blogCTAValues[variant].iconSize}
                    width={blogCTAValues[variant].iconSize}
                    className="mr-2"
                    fill="white"
                />
                <Typography className="uppercase text-white" variant="description">
                    {blogCTAValues[variant].subtitle}
                </Typography>
            </div>

            <Typography className="mb-8 uppercase text-white" as="h2" variant="h3">
                {blogCTAValues[variant].headline}
            </Typography>

            {variant === "CAREER" ? (
                <JobType
                    employmentType={allCareers[0].employmentType!}
                    schedule={allCareers[0].schedule!}
                    location={allCareers[0].location!}
                    className="m-0 mb-6 text-white lg:w-1/2"
                />
            ) : (
                <Typography className="m-0 mb-6" variant="paragraph">
                    {blogCTAValues[variant].text}
                </Typography>
            )}

            <LinkComponent
                id={`link-${blogCTAValues[variant].subtitle}`}
                href={blogCTAValues[variant].link}
                label={blogCTAValues[variant].linkLabel}
                className="relative z-20"
            />
        </article>
    )
}
