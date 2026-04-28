import cn from "@/utils/cn"
import Link from "next/link"
import { tv, VariantProps } from "tailwind-variants"

export const buttonVariants = tv({
    base: "inline-flex items-center w-fit rounded-[4px] px-[18px] py-[9px] text-xxsmall font-gteratext transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
    variants: {
        variant: {
            primary: "bg-primary text-black hover:bg-primary/80",
            dark: "bg-black text-primary hover:bg-black/85",
            outline: "border border-black text-black hover:bg-black/5",
            light: "bg-[#e7e7e7] text-black hover:bg-[#d9d9d9]",
            white: "bg-t1-white text-black hover:bg-t1-white/80"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

interface ButtonProps extends VariantProps<typeof buttonVariants> {
    label: string
    href?: string
    hrefForward?: boolean
    className?: string
    onClick?: () => void
    type?: "button" | "submit"
    disabled?: boolean
}

export default function Button({
    label,
    href,
    hrefForward,
    variant,
    className,
    onClick,
    type = "button",
    disabled
}: ButtonProps) {
    const classes = cn(buttonVariants({ variant }), className)

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                onClick={onClick}
                transitionTypes={hrefForward ? ["nav-forward"] : ["nav-back"]}
            >
                {label}
            </Link>
        )
    }

    return (
        <button type={type} className={classes} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}
