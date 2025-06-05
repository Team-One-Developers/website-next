import * as prettier from "prettier"
import { rehype } from "rehype"
import rehypePrism from "rehype-prism-plus"

const prettierParsers: Record<string, string> = {
    typescript: "typescript",
    javascript: "babel",
    css: "css",
    html: "html",
    json: "json",
    markdown: "markdown",
    graphql: "graphql",
    yaml: "yaml",
    mdx: "mdx",
    vue: "vue",
    angular: "angular"
}

const formatCode = async (code: string, language: string) => {
    if (prettierParsers[language]) {
        try {
            return await prettier.format(code, {
                parser: prettierParsers[language]
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            // formatting failed, return original code
            return code
        }
    }
    return code
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function highlightCode(content: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newContentPromises = content.map(async (block: any) => {
        if (block._type === "code") {
            // Process code with Prism for syntax highlighting
            const highlightedHtml = await rehype()
                .use(rehypePrism, {})
                .process(
                    `<pre><code class="language-${block.language ? block.language : "text"}">${await formatCode(block.code, block.language)}</code></pre>`
                )

            // Convert highlighted result to string
            block.highlighted = highlightedHtml.toString()
            return block
        }
        // Return other blocks unchanged
        return block
    })

    // Wait for all promises to resolve and return the modified content
    const newContent = await Promise.all(newContentPromises)
    return newContent
}
