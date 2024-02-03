import { Career } from "contentlayer/generated"
import Link from "next/link"
import Typography from "../atoms/Typography"

interface JobProps {
    career: Career
    listIndex: number
}

export const CareerElement = (props: JobProps) => {
    const { career, listIndex } = props

    return (
        <div className="border-t-2 border-white last:border-b-2">
            <Link href={career.slug} aria-label={`Link zur Jobseite ${career.title}`}>
                <div className="trans grid cursor-pointer grid-cols-1 hover:bg-t1-darkGray md:grid-cols-[0.1fr_2fr_0.5fr]">
                    <div className="m-2 md:m-4 basis-[2.5%] shrink-0 grow-0">
                        <Typography className="text-white" variant="description">
                            {listIndex.toString().padStart(2, "0")}
                        </Typography>
                    </div>
                    <div className="m-2 md:m-4">
                        <Typography as="h3" variant="h1" className="">
                            {career.title}
                        </Typography>
                    </div>
                    <div className="m-2 md:m-4 flex flex-wrap items-center justify-center ">
                        <div className="flex mb-1 basis-[100%]">
                            <Typography className="text-white uppercase" variant="subtitle">
                                {career.employmentType},&nbsp;
                            </Typography>
                            <Typography className="text-white uppercase" variant="subtitle">
                                {career.schedule}
                            </Typography>
                        </div>
                        <div className="flex mb-1 basis-[100%]">
                            <Typography className="text-white uppercase" variant="subtitle">
                                {career.location}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
