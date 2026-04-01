import Eyebrow from "@/components/atoms/Eyebrow"
import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import { aidArticles, getAidArticleBySlug } from "@/data/aidArticles"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

interface AidArticlePageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return aidArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: AidArticlePageProps): Promise<Metadata> {
    const { slug } = await params
    const article = getAidArticleBySlug(slug)
    if (!article) return {}

    return {
        title: article.title,
        description: article.teaser
    }
}

export default async function AidArticlePage({ params }: AidArticlePageProps) {
    const { slug } = await params
    const article = getAidArticleBySlug(slug)

    if (!article) {
        notFound()
    }

    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <div className="gap-vertical-inner relative z-10 flex flex-col">
                {/* Header */}
                <ContentBlock>
                    <div className="flex flex-col">
                        {/* Back link */}
                        <Link href="/einblicke" className="gap-sm text-small mb-lg flex items-center pt-32 text-black">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="rotate-180"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Zurück zu Einblicke
                        </Link>

                        {/* Title */}
                        <h1 className="font-gteradisplay text-d1 mb-lg font-light text-black">{article.title}</h1>

                        {/* Eyebrow */}
                        <div className="gap-lg mb-lg flex flex-wrap items-center">
                            <Eyebrow label={`${article.series} #${article.episode}`} size="small" />
                            <Eyebrow label={article.guest.company} size="small" />
                        </div>

                        {/* Teaser */}
                        <p className="font-gteradisplay text-medium mb-lg max-w-150 text-black">{article.teaser}</p>

                        {/* Guest info */}
                        <div>
                            <p className="text-small font-medium text-black">{article.guest.name}</p>
                            <p className="text-xsmall text-black/60">
                                {article.guest.role}, {article.guest.company}
                            </p>
                        </div>
                    </div>
                </ContentBlock>

                {/* Interview Q&A */}
                <ContentBlock>
                    <div className="mx-auto max-w-180">
                        <div className="flex flex-col gap-12">
                            {article.qaPairs.map((qa) => (
                                <div key={qa.id} className="flex flex-col gap-4">
                                    <h2 className="font-gteradisplay text-h4 text-black">{qa.question}</h2>
                                    {qa.answer.split("\n\n").map((paragraph, i) => (
                                        <p key={i} className="text-small leading-relaxed text-black/80">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Flash answers */}
                        {article.flashAnswers.length > 0 && (
                            <div className="mt-16 border-t border-black/10 pt-12">
                                <h2 className="font-gteradisplay text-h3 mb-8 text-black">Blitzrunde</h2>
                                <div className="flex flex-col gap-6">
                                    {article.flashAnswers.map((fa, i) => (
                                        <div key={i} className="flex flex-col gap-1">
                                            <p className="text-small font-medium text-black">{fa.prompt}</p>
                                            <p className="text-small text-black/80">{fa.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Pull quotes */}
                        {article.pullQuotes.length > 0 && (
                            <div className="mt-16 border-t border-black/10 pt-12">
                                <h2 className="font-gteradisplay text-h3 mb-8 text-black">Zitate</h2>
                                <div className="flex flex-col gap-8">
                                    {article.pullQuotes.map((quote, i) => (
                                        <blockquote key={i} className="border-primary border-l-4 pl-6">
                                            <p className="font-gteradisplay text-medium text-black italic">
                                                &ldquo;{quote}&rdquo;
                                            </p>
                                        </blockquote>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </ContentBlock>

                {/* Contact */}
                <ContentBlock>
                    <ContactSection title="Lass uns über Software sprechen, die Wachstum schafft." />
                </ContentBlock>
            </div>
        </div>
    )
}
