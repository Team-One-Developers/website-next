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
            <div className="flex w-1/2 flex-col gap-2">
                <Typography variant="paragraph" className="my-0 uppercase">
                    (Type)
                </Typography>
                <Typography variant="h5" className="my-0 font-normal uppercase">
                    {`${employmentType}, ${schedule}`}
                </Typography>
            </div>
            <div className="flex w-1/2 flex-col gap-2">
                <Typography variant="paragraph" className="my-0 uppercase">
                    (Location)
                </Typography>
                <Typography variant="h5" className="my-0 font-normal uppercase">
                    {location}
                </Typography>
            </div>
        </div>
    )
}
