const dict = {
    en: {
        p1: "of",
        p2: "view",
        p3: "Cleaner than",
        p4: "Dirtier than",
        p5: "of pages tested"
    },
    fr: {
        p1: "de",
        p2: "vue",
        p3: "Page web plus légère que",
        p4: "Page web plus lourde que",
        p5: "des pages testées"
    }
}

interface WebsiteCarbonBadgeProps {
    dark?: boolean
    lang?: string
}

type WebsiteCarbonData = {
    co2?: string
    percentage?: string
}

async function WebsiteCarbonBadge({ dark, lang }: WebsiteCarbonBadgeProps) {
    const linkStyleBright =
        "inline-flex justify-center items-center text-center text-[1em] leading-[1.15] no-underline rounded-r-[0.3em] border-[0.13em] border-l-0 border-solid border-[#00ffbc] px-[0.5em] py-[0.3em] mx-0 my-[0.2em] bg-[#0e11a8] text-white font-bold border-[#0e11a8]"
    const linkStyleDark =
        "inline-flex justify-center items-center text-center text-[1em] leading-[1.15] no-underline rounded-r-[0.3em] border-[0.13em] border-l-0 border-solid border-[#00ffbc] px-[0.5em] py-[0.3em] mx-0 my-[0.2em] font-bold bg-[#00ffbc] text-[#0e11a8] border-[#00ffbc]"

    let ps = lang == "fr" ? dict.fr : dict.en

    // const baseUrl = process.env.NODE_ENV === "production"
    //     ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`  // API not meant for private deployments
    //     : "https://www.teamonedevelopers.de";

    const baseUrl = "https://www.teamonedevelopers.de" // get title from current page for specific pathname

    async function fetchData(): Promise<WebsiteCarbonData | null> {
        let url = encodeURIComponent(baseUrl)

        try {
            await new Promise((resolve) => setTimeout(resolve, 3000)) // simulate delay for testing suspense
            //const res = { co2: "1.2", percentage: "80" }
            const res = await fetch("https://api.websitecarbon.com/b?url=" + url)

            if (!res.ok) {
                throw Error(JSON.stringify(await res.json()))
            }

            // const data = res
            const data = await res.json()
            return data
        } catch (e) {
            console.error(e)
            return null
        }
    }

    const data: WebsiteCarbonData | null = await fetchData()

    return (
        <div className="text-center text-[15px] leading-[1.15] text-[#0e11a8]">
            <div>
                <a
                    className="mx-0 my-[0.2em] inline-flex min-w-[8.2em] items-center justify-center rounded-l-[0.3em] rounded-r-none border-[0.13em] border-r-0 border-solid border-[#00ffbc] bg-white px-[0.5em] py-[0.3em] text-center text-[1em] leading-[1.15] text-[#0e11a8] no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.websitecarbon.com/website/${baseUrl}`}
                >
                    {data?.co2 ? data.co2 + "g" : "n/a"} {ps.p1} CO
                    <sub className="relative top-[0.3em] align-middle text-[0.7em]">2</sub>/{ps.p2}
                </a>
                <a
                    className={dark ? linkStyleDark : linkStyleBright}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://websitecarbon.com"
                >
                    Website Carbon
                </a>
            </div>
            <span
                className={
                    dark
                        ? "mx-0 my-[0.2em] inline-flex items-center justify-center text-center text-[1em] leading-[1.15] text-white no-underline"
                        : "mx-0 my-[0.2em] inline-flex items-center justify-center text-center text-[1em] leading-[1.15] no-underline"
                }
            >
                {data?.percentage
                    ? parseInt(data.percentage) > 50
                        ? `${ps.p3} ${data.percentage}% ${ps.p5}`
                        : `${ps.p4} ${data.percentage}% ${ps.p5}`
                    : "n/a"}
            </span>
        </div>
    )
}

// TODO find out why animation not working
// const shimmer =
//     "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent"

function WebsiteCarbonBadgeSkeleton() {
    return (
        <div className={`overflow-hidden bg-primary`}>
            <div className="h-[66px] w-[280px]"></div>
        </div>
    )
}

export { WebsiteCarbonBadge, WebsiteCarbonBadgeSkeleton }
