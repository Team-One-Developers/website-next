"use client"

import { ImageProps, Image as UnpicImage } from "@unpic/react/next"

export const Image = (props: ImageProps) => {
	return <UnpicImage background="auto" {...props} />
}
