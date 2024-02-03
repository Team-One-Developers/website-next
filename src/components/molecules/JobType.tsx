import { twMerge } from "tailwind-merge"
import Typography from "../atoms/Typography"

export const JobType = ({
    employmentType,
    schedule,
    location,
    className
}: {
    employmentType: string
    schedule: string
    location: string
    className?: string
}) => {
    return (
        <div className={twMerge("flex w-full justify-between mt-12 gap-4 flex-wrap sm:flex-nowrap", className)}>
            <div className="flex flex-col w-1/2 gap-2">
                <Typography variant="paragraph" className="uppercase my-0">
                    (Type)
                </Typography>
                <Typography variant="h4" className="my-0 font-normal">
                    {`${employmentType}, ${schedule}`}
                </Typography>
            </div>
            <div className="flex flex-col w-1/2 gap-2">
                <Typography variant="paragraph" className="uppercase my-0">
                    (Location)
                </Typography>
                <Typography variant="h4" className="my-0 font-normal">
                    {location}
                </Typography>
            </div>
        </div>
    )
}
