import { getMDXComponent } from "next-contentlayer/hooks"
import { Image } from "./atoms/Image"
import { ClassAttributes, ImgHTMLAttributes, JSX, memo } from "react"
import Typography from "./atoms/Typography"

const components = {
    img: (() => {
        const Img = (
            props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>
        ) => {
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
        const H1 = (props: any) => <Typography {...props} as="h1" variant="h1" className="uppercase" />
        return memo(H1)
    })(),
    h2: (() => {
        const H2 = (props: any) => <Typography {...props} as="h2" variant="h2" className="uppercase" />
        return memo(H2)
    })(),
    h3: (() => {
        const H3 = (props: any) => <Typography {...props} as="h3" variant="h3" className="" />
        return memo(H3)
    })(),
    h4: (() => {
        const H4 = (props: any) => <Typography {...props} as="h4" variant="h4" className="" />
        return memo(H4)
    })(),
    h5: (() => {
        const H5 = (props: any) => <Typography {...props} as="h5" variant="h5" className="" />
        return memo(H5)
    })(),
    h6: (() => {
        const H6 = (props: any) => <Typography {...props} as="h6" variant="h6" className="" />
        return memo(H6)
    })(),
    p: (() => {
        const P = (props: any) => <Typography {...props} as="p" variant="paragraph" className="" />
        return memo(P)
    })()
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps) {
    const Content = getMDXComponent(code)

    //
    return <Content components={components} />
}
