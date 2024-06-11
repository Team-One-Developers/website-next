import { ReactNode, MouseEventHandler } from "react"
import { twMerge } from "tailwind-merge"

export type MediaButtonProps = {
    children: ReactNode
    className?: string
    style?: Object
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
export const MediaButton = ({ children, className, style, onClick }: MediaButtonProps) => {
    const classNameBase =
        "cursor-pointer justify-center rounded-sm bg-transparent p-2 font-spacegrotesk text-primary transition-colors duration-[250ms] hover:bg-black"
    return (
        <button style={style} className={twMerge(classNameBase, className)} onClick={onClick}>
            {children}
        </button>
    )
}
