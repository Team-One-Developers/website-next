/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import "@/app/prism.css"
import { slugify } from "@/utils/slugify"
import { PortableText, PortableTextComponents, PortableTextProps } from "@portabletext/react"
import { getImageDimensions } from "@sanity/asset-utils"
import Image from "next/image"
import { memo } from "react"

const components: PortableTextComponents = {
    types: {
        code: ({ value }) => (
            <div data-language={value.language} dangerouslySetInnerHTML={{ __html: value.highlighted }} />
        ),
        image: ({ value }) => {
            const { width, height } = getImageDimensions(value)
            return (
                <div className="py-10">
                    <Image
                        src={value.asset.url}
                        alt={value.alt || "Blog Bild"}
                        width={width}
                        height={height}
                        sizes="100vw"
                        placeholder="blur"
                        blurDataURL={value.asset.metadata.lqip}
                        loading="lazy"
                        style={{ aspectRatio: width / height }}
                        className="w-full rounded-lg object-cover"
                    />
                </div>
            )
        }
    },
    marks: {
        link: (() => {
            const A = (props: any) => (
                <a
                    href={props.value.href}
                    className="text-medium text-black underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.children}
                </a>
            )
            return memo(A)
        })()
    },
    block: {
        h1: (() => {
            const H1 = (props: any) => (
                <h2
                    className="font-gteradisplay text-h1 mx-auto my-10 max-w-175 text-center text-black"
                    id={slugify(props.value.children[0].text)}
                >
                    {props.children}
                </h2>
            )
            return memo(H1)
        })(),
        h2: (() => {
            const H2 = (props: any) => (
                <h2
                    className="font-gteradisplay text-h1 mx-auto my-10 max-w-175 text-center text-black"
                    id={slugify(props.value.children[0].text)}
                >
                    {props.children}
                </h2>
            )
            return memo(H2)
        })(),
        h3: (() => {
            const H3 = (props: any) => (
                <h3
                    className="font-gteradisplay text-h3 mt-10 mb-6 text-black"
                    id={slugify(props.value.children[0].text)}
                >
                    {props.children}
                </h3>
            )
            return memo(H3)
        })(),
        h4: (() => {
            const H4 = (props: any) => (
                <h4
                    className="font-gteradisplay text-h4 mt-10 mb-6 text-black"
                    id={slugify(props.value.children[0].text)}
                >
                    {props.children}
                </h4>
            )
            return memo(H4)
        })(),
        h5: (() => {
            const H5 = (props: any) => (
                <h5
                    className="font-gteradisplay text-small mt-8 mb-4 text-black"
                    id={slugify(props.value.children[0].text)}
                >
                    {props.children}
                </h5>
            )
            return memo(H5)
        })(),
        h6: (() => {
            const H6 = (props: any) => (
                <h6
                    className="font-gteradisplay text-small mt-8 mb-4 text-black"
                    id={slugify(props.value.children[0].text)}
                >
                    {props.children}
                </h6>
            )
            return memo(H6)
        })(),
        blockquote: (() => {
            const BQ = (props: any) => (
                <blockquote className="font-gteradisplay text-h1 mx-auto my-10 max-w-175 text-center text-black">
                    {props.children}
                </blockquote>
            )
            return memo(BQ)
        })(),
        normal: (() => {
            const P = (props: any) => (
                <p className="font-gteratext text-medium my-6 text-black opacity-60">{props.children}</p>
            )
            return memo(P)
        })()
    },
    list: {
        bullet: ({ children }: any) => <ul className="text-medium my-6 flex flex-col gap-4 text-black">{children}</ul>,
        number: ({ children }: any) => (
            <ol className="text-medium my-4 list-inside list-decimal text-black opacity-60">{children}</ol>
        )
    },
    listItem: {
        bullet: ({ children }: any) => (
            <li className="font-gteratext text-medium flex items-start gap-2 text-black">
                <span className="bg-primary mt-2.5 size-2 shrink-0 rounded-full" />
                <div className="min-w-0 flex-1">{children}</div>
            </li>
        ),
        number: ({ children }: any) => <li className="font-gteratext text-medium my-2 pl-4 text-black">{children}</li>
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
