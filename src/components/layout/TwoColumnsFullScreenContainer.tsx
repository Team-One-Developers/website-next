import { ReactNode } from 'react'
import Link from 'next/link'

import { Image } from '../atoms/Image'
import Typography from '../atoms/Typography'

type TwoColumnsFullScreenContainerProps = {
  left: ReactNode
  right: ReactNode
}

export const TwoColumnsFullScreenContainer = (
  props: TwoColumnsFullScreenContainerProps
) => {
  const { left, right } = props

  return (
    <div className="block overflow-hidden grid-cols-2 grid-rows-1 gap-0 lg:grid">
      <div className="box-border static h-auto w-full top-0 left-0 bg-primary lg:absolute lg:h-screen lg:w-1/2">
        <Link href="/career#jobs">
          <div className="absolute top-[120px] min-h-[50px] max-h-[80px] w-[200px] -translate-x-[170px] z-20 duration-[200ms] flex justify-end items-center bg-black cursor-pointer hover:translate-x-0">
            <div>
              <Typography
                variant="text_sm"
                className="text-primary m-0 uppercase font-spacegrotesk"
              >
                Zurück zu Jobs
              </Typography>
            </div>
            <Image
              src="/images/icons/arrowDown.svg"
              alt="Back arrow"
              height={30}
              width={30}
              layout="fixed"
            />
          </div>
        </Link>
        <div className="static w-full py-[75px] px-8 box-border lg:fixed lg:w-1/2 lg:pt-[190px] lg:p-[50px] lg:top-0">
          {left}
        </div>
      </div>
      <div className=" p-8 h-auto overflow-y-hidden lg:py-[190px] lg:px-[100px] lg:overflow-y-auto lg:h-[calc(100vh-110px)]">
        <div>{right}</div>
      </div>
    </div>
  )
}
