import { twMerge } from "tailwind-merge"
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
            className={twMerge("mt-0 flex w-fit gap-2 border-b border-primary text-white font-normal", className)}
            variant="h3"
        >
            <Icon name="arrow_to_top_right" className={twMerge("text-primary", arrowClass)} width={40} height={40} />
            <a href={href} className="self-end pb-3">
                {name}
            </a>
        </Typography>
    )
}
