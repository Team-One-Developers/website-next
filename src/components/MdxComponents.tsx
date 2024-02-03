import { getMDXComponent } from "next-contentlayer/hooks"
import { Image } from "./atoms/Image"

const components = {
    Image: Image
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps) {
    const Content = getMDXComponent(code)

    return <Content components={components} />
}
