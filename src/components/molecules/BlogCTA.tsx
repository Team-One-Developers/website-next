import { allCareers } from "contentlayer/generated"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { Image } from "../atoms/Image"
import { Link as LinkComponent } from "../atoms/Link"
import Typography from "../atoms/Typography"
import Icon, { IconProps } from "../molecules/Icon"
import { JobType } from "./JobType"
import CTA_BG from "/public/images/optimized/hero_optimized.webp"

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

const BlogCTAValues: BlogCTAValueObject = {
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
        headline: allCareers[0].title,
        text: "",
        link: allCareers[0].slug,
        linkLabel: "Zur Stellenanzeige"
    }
}

interface BlogCTAProps {
    variant: Variant
    className?: string
}

export const BlogCTA = ({ variant, className }: BlogCTAProps) => {
    return (
        <article
            className={twMerge("relative p-8 z-0 rounded-md transition-shadow hover:shadow-md", className)}
            aria-label={BlogCTAValues[variant].linkLabel}
        >
            <Link
                href={BlogCTAValues[variant].link}
                className="absolute left-0 top-0 z-10 size-full"
                aria-labelledby={`link-${BlogCTAValues[variant].subtitle}`}
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
                    name={BlogCTAValues[variant].icon}
                    height={BlogCTAValues[variant].iconSize}
                    width={BlogCTAValues[variant].iconSize}
                    className="mr-2"
                    fill="white"
                />
                <Typography className="uppercase text-white" variant="description">
                    {BlogCTAValues[variant].subtitle}
                </Typography>
            </div>

            <Typography className="mb-8 uppercase text-white" as="h2" variant="h3">
                {BlogCTAValues[variant].headline}
            </Typography>

            {variant === "CAREER" ? (
                <JobType
                    employmentType={allCareers[0].employmentType}
                    schedule={allCareers[0].schedule}
                    location={allCareers[0].location}
                    className="m-0 mb-6 text-white lg:w-1/2"
                />
            ) : (
                <Typography className="m-0 mb-6" variant="paragraph">
                    {BlogCTAValues[variant].text}
                </Typography>
            )}

            <LinkComponent
                id={`link-${BlogCTAValues[variant].subtitle}`}
                href={BlogCTAValues[variant].link}
                label={BlogCTAValues[variant].linkLabel}
                className="relative z-20"
            />
        </article>
    )
}
