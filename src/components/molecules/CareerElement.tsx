import Link from "next/link"
import Typography from "../atoms/Typography"
import { Career } from "@/sanity/types"

interface JobProps {
    career: Career
    listIndex: number
}

export const CareerElement = ({ career, listIndex }: JobProps) => {
    if (!career.slug?.current) return null

    return (
        <div className="border-t-2 border-white last:border-b-2">
            <Link href={`/career/job/${career.slug.current}`} aria-label={`Link zur Jobseite ${career.title}`}>
                <div className="grid cursor-pointer grid-cols-1 gap-[4px] p-3 hover:bg-t1-darkGray md:grid-cols-[0.1fr_2fr_0.5fr] md:gap-0 md:p-0">
                    <div className="shrink-0 grow-0 basis-[2.5%] md:m-4">
                        <Typography className="text-white" variant="description">
                            {listIndex.toString().padStart(2, "0")}
                        </Typography>
                    </div>
                    <div className="md:m-4">
                        <Typography as="h3" variant="h2" className="font-normal uppercase">
                            {career.title}
                        </Typography>
                    </div>
                    <div className="flex flex-wrap md:m-4">
                        <div className="flex basis-full">
                            <Typography className="uppercase text-white" variant="paragraph">
                                {career.employmentType},&nbsp;
                            </Typography>
                            <Typography className="uppercase text-white" variant="paragraph">
                                {career.schedule}
                            </Typography>
                        </div>
                        {/* <div className="mb-1 flex basis-full">
                            <Typography className="uppercase text-white" variant="subtitle">
                                {career.location}
                            </Typography>
                        </div> */}
                    </div>
                </div>
            </Link>
        </div>
    )
}
