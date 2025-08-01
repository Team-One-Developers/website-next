import { ReactNode } from "react"

type TwoColumnsFullScreenContainerProps = {
    left: ReactNode
    right: ReactNode
}

export const TwoColumnsFullScreenContainer = (props: TwoColumnsFullScreenContainerProps) => {
    const { left, right } = props

    return (
        <div className="mt-[-75px] auto-rows-auto grid-cols-2 gap-0 lg:grid">
            <div className="bg-primary text-primary flex w-full justify-end pt-[75px]">
                <div className="4xl:pr-20 relative w-full max-w-[960px] px-4 py-12 md:px-8 md:py-16 xl:pr-16">
                    <div className="sticky lg:top-[125px]">{left}</div>
                </div>
            </div>
            <div className="bg-t1-black flex size-full justify-start lg:right-0 lg:pt-[75px]">
                <div className="4xl:pl-20 relative size-full max-w-[960px] px-4 py-12 md:px-8 md:py-16 xl:pl-16">
                    {right}
                </div>
            </div>
        </div>
    )
}
