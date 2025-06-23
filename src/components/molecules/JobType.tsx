import Typography from "@/components/atoms/Typography"
import cn from "@/utils/cn"

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
        <div className={cn("mt-12 flex w-full flex-wrap justify-between gap-4 sm:flex-nowrap", className)}>
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
