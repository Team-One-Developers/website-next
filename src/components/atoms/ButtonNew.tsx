import cn from "@/utils/cn"
import Link from "next/link"
import { tv, VariantProps } from "tailwind-variants"

export const buttonNewVariants = tv({
    base: "inline-flex items-center w-fit rounded-[4px] px-[18px] py-[9px] text-xxsmall font-gteratext transition-colors duration-200 cursor-pointer",
    variants: {
        variant: {
            primary: "bg-primary text-black hover:bg-primary/80",
            outline: "border border-black text-black hover:bg-black/5",
            light: "bg-[#e7e7e7] text-black hover:bg-[#d9d9d9]"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

interface ButtonNewProps extends VariantProps<typeof buttonNewVariants> {
    label: string
    href?: string
    className?: string
    onClick?: () => void
    type?: "button" | "submit"
}

export default function ButtonNew({ label, href, variant, className, onClick, type = "button" }: ButtonNewProps) {
    const classes = cn(buttonNewVariants({ variant }), className)

    if (href) {
        return (
            <Link href={href} className={classes}>
                {label}
            </Link>
        )
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {label}
        </button>
    )
}
