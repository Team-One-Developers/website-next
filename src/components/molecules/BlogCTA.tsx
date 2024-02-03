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
        <div className={twMerge("relative p-8 z-0 rounded-md", className)}>
            <Image
                src={CTA_BG}
                className="absolute top-0 -z-10 left-0 opacity-[80%] rounded-md"
                alt="Background Image"
                fill
                placeholder="blur"
            />
            <Link href={BlogCTAValues[variant].link} className="absolute top-0 left-0 w-full h-full z-10" />
            <div className="flex items-center mb-4">
                <Icon
                    name={BlogCTAValues[variant].icon}
                    height={BlogCTAValues[variant].iconSize}
                    width={BlogCTAValues[variant].iconSize}
                    className="mr-2"
                />
                <Typography className="text-primary uppercase" variant="description">
                    {BlogCTAValues[variant].subtitle}
                </Typography>
            </div>

            <Typography className={"mb-8"} as="h2" variant="h3">
                {BlogCTAValues[variant].headline}
            </Typography>

            {variant === "CAREER" ? (
                <JobType
                    employmentType={allCareers[0].employmentType}
                    schedule={allCareers[0].schedule}
                    location={allCareers[0].location}
                    className="text-white lg:w-1/2 m-0 mb-6"
                />
            ) : (
                <Typography className="m-0 mb-6" variant="paragraph">
                    {BlogCTAValues[variant].text}
                </Typography>
            )}

            <LinkComponent
                href={BlogCTAValues[variant].link}
                label={BlogCTAValues[variant].linkLabel}
                className="relative z-20"
            />
        </div>
    )
}
