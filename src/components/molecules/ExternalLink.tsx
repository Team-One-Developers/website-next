import cn from "@/lib/cn"
import Link from "next/link"
import Typography from "../atoms/Typography"
import Icon from "./Icon"

export const ExternalLink = ({
    href,
    name,
    className,
    arrowClass
}: {
    href: string
    name: string
    className?: string
    arrowClass?: string
}) => {
    return (
        <Typography
            as="div"
            className={cn("mt-0 flex w-fit gap-2 border-b border-primary font-normal text-white", className)}
            variant="h3"
        >
            <Icon name="arrow_to_top_right" className={cn("text-primary", arrowClass)} width={40} height={40} />
            <Link href={href} className="self-end pb-3">
                {name}
            </Link>
        </Typography>
    )
}
