import { twJoin } from "tailwind-merge"
import Typography from "../atoms/Typography"

export const Card = ({ subTitle, title, text }: { subTitle?: string; title: string; text: string }) => {
    return (
        <div
            className={twJoin(
                "bg-card text-card-foreground group flex flex-col gap-6 rounded-lg p-8 transition-transform duration-500 hover:scale-105 lg:flex-row lg:gap-12"
            )}
        >
            {subTitle && (
                <span className="min-w-[7%] font-spacegrotesk text-xs font-medium uppercase not-italic leading-110 text-primary">
                    {subTitle}
                </span>
            )}
            <Typography
                as="h3"
                variant="h3"
                className="w-full font-spacegrotesk uppercase group-hover:text-inherit lg:max-w-md"
            >
                {title}
            </Typography>
            <Typography variant="paragraph" className="mt-[14px] lg:mt-0">
                {text}
            </Typography>
        </div>
    )
}
