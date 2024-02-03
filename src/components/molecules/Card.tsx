import { twJoin } from "tailwind-merge"
import Typography from "../atoms/Typography"

export const Card = ({ subTitle, title, text }: { subTitle?: string; title: string; text: string }) => {
    return (
        <div
            className={twJoin(
                "group p-8 lg:flex-row gap-6 lg:gap-12 flex flex-col rounded-lg bg-card text-card-foreground hover:scale-105 transition-transform duration-500"
            )}
        >
            {subTitle && (
                <span className="font-spacegrotesk text-primary font-medium not-italic text-xs leading-110 tracking-aBitTighter uppercase min-w-[7%]">
                    {subTitle}
                </span>
            )}
            <Typography
                as="h3"
                variant="h3"
                className="uppercase font-spacegrotesk group-hover:text-inherit lg:max-w-md w-full"
            >
                {title}
            </Typography>
            <Typography variant="paragraph" className="mt-[14px] lg:mt-0">
                {text}
            </Typography>
        </div>
    )
}
