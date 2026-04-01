const fs = require("fs")

const files = [
    { file: "src/temp/aid-nader-fadl-38.json", image: "/images/nader-Fadl.jpg" },
    { file: "src/temp/aid-timo-deiner-40.json", image: "/images/Timo-Deiner.jpg" },
    { file: "src/temp/aiti-alex-graf-50.json", image: "/images/Alex-Graf.jpg" },
    { file: "src/temp/aiti-stefan-schultz-27.json", image: "/images/Stefan-Schulz.jpg" }
]

const articles = files.map((f) => {
    let text = fs.readFileSync(f.file, "utf8")
    // The JSON files have „text" patterns where „ is U+201E and the closing " is
    // a regular ASCII quote - which breaks JSON parsing. Fix by replacing the whole
    // pattern „...\" with '...'
    text = text.replace(/\u201E([^"\u201E]*?)"/g, "'$1'")
    // Also handle any remaining smart quotes
    text = text.replace(/[\u201C\u201D\u201E\u2018\u2019]/g, "'")
    const raw = JSON.parse(text)
    const a = raw.article
    const g = a.guest
    return {
        id: a.id,
        series: a.series,
        episode: a.episode,
        slug: a.slug,
        title: a.title,
        teaser: a.teaser,
        date: a.date,
        image: f.image,
        guest: {
            name: g.name || g.short_name,
            company: g.company || (g.companies ? g.companies[0] : ""),
            role: g.role || (g.roles ? g.roles.join(", ") : ""),
            bio: g.bio
        },
        qaPairs: a.qa_pairs.map((q) => ({
            id: q.id,
            question: q.question,
            answer: q.answer
        })),
        flashAnswers: (a.flash_answers || []).map((fa) => ({
            prompt: fa.prompt,
            answer: fa.answer
        })),
        pullQuotes: (a.pull_quotes || []).map((p) => p.text)
    }
})

// Build TypeScript source
function escapeStr(s) {
    if (s === null || s === undefined) return "null"
    return JSON.stringify(s)
}

function indent(str, level) {
    const prefix = "    ".repeat(level)
    return str
        .split("\n")
        .map((l) => prefix + l)
        .join("\n")
}

let out = `export interface AidQaPair {
    id: string
    question: string
    answer: string
}

export interface AidArticle {
    id: string
    series: string
    episode: number
    slug: string
    title: string
    teaser: string
    date: string | null
    image: string
    guest: {
        name: string
        company: string
        role: string
        bio: string
    }
    qaPairs: AidQaPair[]
    flashAnswers: { prompt: string; answer: string }[]
    pullQuotes: string[]
}

export const aidArticles: AidArticle[] = [\n`

articles.forEach((article, ai) => {
    out += `    {\n`
    out += `        id: ${escapeStr(article.id)},\n`
    out += `        series: ${escapeStr(article.series)},\n`
    out += `        episode: ${article.episode},\n`
    out += `        slug: ${escapeStr(article.slug)},\n`
    out += `        title: ${escapeStr(article.title)},\n`
    out += `        teaser: ${escapeStr(article.teaser)},\n`
    out += `        date: ${article.date ? escapeStr(article.date) : "null"},\n`
    out += `        image: ${escapeStr(article.image)},\n`
    out += `        guest: {\n`
    out += `            name: ${escapeStr(article.guest.name)},\n`
    out += `            company: ${escapeStr(article.guest.company)},\n`
    out += `            role: ${escapeStr(article.guest.role)},\n`
    out += `            bio: ${escapeStr(article.guest.bio)}\n`
    out += `        },\n`

    // qaPairs
    out += `        qaPairs: [\n`
    article.qaPairs.forEach((qa, qi) => {
        out += `            { id: ${escapeStr(qa.id)}, question: ${escapeStr(qa.question)}, answer: ${escapeStr(qa.answer)} }`
        out += qi < article.qaPairs.length - 1 ? ",\n" : "\n"
    })
    out += `        ],\n`

    // flashAnswers
    out += `        flashAnswers: [\n`
    article.flashAnswers.forEach((fa, fi) => {
        out += `            { prompt: ${escapeStr(fa.prompt)}, answer: ${escapeStr(fa.answer)} }`
        out += fi < article.flashAnswers.length - 1 ? ",\n" : "\n"
    })
    out += `        ],\n`

    // pullQuotes
    out += `        pullQuotes: [\n`
    article.pullQuotes.forEach((pq, pi) => {
        out += `            ${escapeStr(pq)}`
        out += pi < article.pullQuotes.length - 1 ? ",\n" : "\n"
    })
    out += `        ]\n`

    out += `    }`
    out += ai < articles.length - 1 ? ",\n" : "\n"
})

out += `]\n\n`
out += `export function getAidArticleBySlug(slug: string): AidArticle | undefined {\n`
out += `    return aidArticles.find((a) => a.slug === slug)\n`
out += `}\n`

fs.writeFileSync("src/data/aidArticles.ts", out)
console.log("Generated aidArticles.ts with", articles.length, "articles")
