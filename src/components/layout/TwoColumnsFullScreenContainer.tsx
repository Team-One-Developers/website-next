import { ReactNode } from "react"

type TwoColumnsFullScreenContainerProps = {
    left: ReactNode
    right: ReactNode
}

export const TwoColumnsFullScreenContainer = (props: TwoColumnsFullScreenContainerProps) => {
    const { left, right } = props

    return (
        <div className="grid-cols-2 grid-rows-auto gap-0 lg:grid -mt-[75px]">
            <div className="w-full bg-primary pt-[75px] text-primary-foreground flex justify-end">
                <div className="relative max-w-[960px] w-full py-12 px-4 md:py-16 md:px-8 xl:pr-16 4xl:pr-20">
                    <div className="sticky lg:top-[125px]">{left}</div>
                </div>
            </div>
            <div className="w-full flex justify-start lg:pt-[75px] bg-black lg:right-0 h-full">
                <div className="max-w-[960px] w-full h-full relative py-12 px-4 md:py-16 md:px-8 xl:pl-16 4xl:pl-20">
                    {right}
                </div>
            </div>
        </div>
    )
}
