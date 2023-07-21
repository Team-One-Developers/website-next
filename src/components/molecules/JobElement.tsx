import Link from 'next/link'
import { EMPLOYMENT_TYPE, SCHEDULE } from '@/constants/jobs'

import { Employment, Schedule } from '@/types/jobs'

import Typography from '../atoms/Typography'

export interface Job {
  slug: string
  title: string
  location: string
  schedule: string
  employmentType: string
  description: string
  challenges: string[]
  yourProfile: string[]
  relatedJobIds: string[]
  date: string
}

interface JobProps {
  job: Job
  listIndex: number
}

export const JobElement = (props: JobProps) => {
  const { job, listIndex } = props

  return (
    <div className="border-t-2 border-white last:border-b-2">
      <Link
        href={`/career/jobs/${job.slug}`}
        aria-label={`Link zur Jobseite ${job.title}`}
      >
        <div className="trans grid cursor-pointer grid-cols-1 hover:bg-t1-darkGray md:grid-cols-[0.1fr_2fr_0.5fr]">
          <div className="m-2 md:m-4 basis-[2.5%] shrink-0 grow-0">
            <Typography className="text-white" variant="subtitle">
              {listIndex.toString().padStart(2, '0')}
            </Typography>
          </div>
          <div className="m-2 md:m-4">
            <Typography as="h3" variant="h2_sm">
              {job.title}
            </Typography>
          </div>
          <div className="m-2 md:m-4 flex flex-wrap items-center justify-center ">
            <div className="flex mb-1 basis-[100%]">
              <Typography
                className="text-white uppercase"
                variant="subtitle_lg"
              >
                {EMPLOYMENT_TYPE[job.employmentType as Employment]},&nbsp;
              </Typography>
              <Typography
                className="text-white uppercase"
                variant="subtitle_lg"
              >
                {SCHEDULE[job.schedule as Schedule]}
              </Typography>
            </div>
            <div className="flex mb-1 basis-[100%]">
              <Typography
                className="text-white uppercase"
                variant="subtitle_lg"
              >
                {job.location}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
