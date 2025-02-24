"use client"

import { slugify } from "@/lib/slugify"
import { PortableText, PortableTextComponents, PortableTextProps } from "@portabletext/react"
import { getImageDimensions } from "@sanity/asset-utils"
import { memo } from "react"
import { Image } from "./atoms/Image"
import Typography from "./atoms/Typography"

const components: PortableTextComponents = {
    types: {
        code: ({ value }) => (
            <div data-language={value.language} dangerouslySetInnerHTML={{ __html: value.highlighted }} />
        ),
        image: ({ value }) => {
            const { width, height } = getImageDimensions(value)
            return (
                <div className="py-4">
                    <Image
                        src={value.asset.url}
                        alt={value.alt || ""}
                        width={width}
                        height={height}
                        sizes="100vw"
                        placeholder="blur"
                        blurDataURL={value.asset.metadata.lqip}
                        loading="lazy"
                        style={{
                            aspectRatio: width / height
                        }}
                    />
                </div>
            )
        }
    },
    marks: {
        link: (() => {
            const A = (props: any) => (
                <Typography href={props.value.href} as="a" variant="link" className="" {...props} />
            )
            return memo(A)
        })()
    },
    block: {
        h1: (() => {
            const H1 = (props: any) => (
                <Typography
                    {...props}
                    as="h1"
                    variant="h1"
                    className="mb-8 mt-12 uppercase"
                    id={slugify(props.value.children[0].text)}
                />
            )
            return memo(H1)
        })(),
        h2: (() => {
            const H2 = (props: any) => (
                <Typography
                    {...props}
                    as="h2"
                    variant="h2"
                    className="mb-8 mt-12 uppercase"
                    id={slugify(props.value.children[0].text)}
                />
            )
            return memo(H2)
        })(),
        h3: (() => {
            const H3 = (props: any) => (
                <Typography
                    {...props}
                    as="h3"
                    variant="subtitle"
                    className="mt-12 text-lg font-medium leading-150 lg:text-2xl"
                    id={slugify(props.value.children[0].text)}
                />
            )
            return memo(H3)
        })(),
        h4: (() => {
            const H4 = (props: any) => (
                <Typography
                    {...props}
                    as="h4"
                    variant="subtitle"
                    className="mb-8 mt-12"
                    id={slugify(props.value.children[0].text)}
                />
            )
            return memo(H4)
        })(),
        h5: (() => {
            const H5 = (props: any) => (
                <Typography
                    {...props}
                    as="h5"
                    variant="subtitle"
                    className="mb-8 mt-12"
                    id={slugify(props.value.children[0].text)}
                />
            )
            return memo(H5)
        })(),
        h6: (() => {
            const H6 = (props: any) => (
                <Typography
                    {...props}
                    as="h6"
                    variant="subtitle"
                    className="mb-8 mt-12"
                    id={slugify(props.value.children[0].text)}
                />
            )
            return memo(H6)
        })(),
        normal: (() => {
            const P = (props: any) => <Typography {...props} as="p" variant="paragraph" className="font-inter my-6" />
            return memo(P)
        })()
    },
    list: {
        bullet: ({ children }: any) => <ul className="mb-5 list-[square] pl-5">{children}</ul>
    },
    listItem: {
        bullet: ({ children }: any) => (
            <Typography as="li" variant="paragraph" className="marker: my-4 pl-4 marker:block marker:text-primary">
                {children}
            </Typography>
        )
    },
    hardBreak: undefined,
    unknownType: undefined,
    unknownMark: undefined,
    unknownBlockStyle: undefined,
    unknownList: undefined,
    unknownListItem: undefined
}

export const T1PortableText = (props: PortableTextProps) => {
    return <PortableText {...props} components={components} />
}
