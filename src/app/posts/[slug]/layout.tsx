import { ReactNode } from "react"

const BlogLayout = ({ children }: { children: ReactNode }) => {
	return <main className="container flex justify-center">{children}</main>
}

export default BlogLayout
