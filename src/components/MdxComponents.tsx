import { getMDXComponent } from "next-contentlayer/hooks"
import { ImgHTMLAttributes, memo } from "react"
import { Image } from "./atoms/Image"
import Typography from "./atoms/Typography"

const components = (theme: string) => ({
    img: (() => {
        const Img = (props: ImgHTMLAttributes<HTMLImageElement>) => {
            return (
                <Image
                    src={props.src || ""}
                    alt={props.alt || ""}
                    width={0}
                    height={0}
                    sizes="(min-width: 1200px) 50vw, 90vw"
                    style={{ width: "100%", height: "auto" }}
                />
            )
        }
        return memo(Img)
    })(),
    h1: (() => {
        const H1 = (props: any) => <Typography {...props} as="h1" variant="h1" className="mb-8 mt-12 uppercase" />
        return memo(H1)
    })(),
    h2: (() => {
        const H2 = (props: any) => <Typography {...props} as="h2" variant="h2" className="mb-8 mt-12 uppercase" />
        return memo(H2)
    })(),
    h3: (() => {
        const H3 = (props: any) => <Typography {...props} as="h3" variant="h3" className="mb-8 mt-12" />
        return memo(H3)
    })(),
    h4: (() => {
        const H4 = (props: any) => <Typography {...props} as="h4" variant="h4" className="mb-8 mt-12" />
        return memo(H4)
    })(),
    h5: (() => {
        const H5 = (props: any) => <Typography {...props} as="h5" variant="h5" className="mb-8 mt-12" />
        return memo(H5)
    })(),
    h6: (() => {
        const H6 = (props: any) => <Typography {...props} as="h6" variant="h6" className="mb-8 mt-12" />
        return memo(H6)
    })(),
    p: (() => {
        const P = (props: any) => <Typography {...props} as="p" variant="paragraph" className="my-6" />
        return memo(P)
    })(),
    ul: (() => {
        const Ul = (props: any) => <ul {...props} className="mb-5 list-[square] pl-5" />
        return memo(Ul)
    })(),
    li: (() => {
        const Li = (props: any) => (
            <Typography
                {...props}
                as="li"
                variant="paragraph"
                className={`marker: my-4 pl-4 marker:block ${theme === "dark" ? "marker:text-primary" : "marker:text-foreground"}`}
            />
        )
        return memo(Li)
    })(),
    blockquote: (() => {
        const Bq = (props: any) => (
            <blockquote {...props} className="my-7 border-l-2 border-foreground-hover pl-4 font-medium italic" />
        )
        return memo(Bq)
    })()
})

interface MdxProps {
    code: string
    theme: "dark" | "light"
}

export function Mdx({ code, theme }: MdxProps) {
    const Content = getMDXComponent(code)
    return <Content components={components(theme)} />
}
