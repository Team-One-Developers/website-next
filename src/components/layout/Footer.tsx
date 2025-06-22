import Typography from "@/components/atoms/Typography"
import Link from "next/link"
import { JSX, SVGProps } from "react"

const navigation = {
    services: [
        { name: "Alle Leistungen", href: "/services" }
        // { name: "Software Engineering", href: "/services/software-engineering" },
        // { name: "AI & Data Analytics", href: "/services/ai-data-analytics" },
        // { name: "Digital Strategy & Transformation", href: "/services/digital-strategy-transformation" }
    ],
    company: [
        { name: "Culture", href: "/culture" },
        { name: "Career", href: "/career" }
    ],
    resources: [
        { name: "Blog", href: "/blog" },
        { name: "AI:D Magazin", href: "/aid-magazin" }
        // { name: "Webinare", href: "/webinare" }
    ],
    legal: [
        { name: "Datenschutz", href: "/privacy" },
        { name: "Impressum", href: "/legal-notice" },
        { name: "Kontakt", href: "/contact" }
    ],
    social: [
        {
            name: "Instagram",
            href: "https://www.instagram.com/teamonedevelopers/",
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/team-one-developers",
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 72 72" width="24" {...props}>
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                            fill="currentColor"
                        />
                        <path
                            d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                            fill="black"
                        />
                    </g>
                </svg>
            )
        }
    ]
}

export default function Footer() {
    return (
        <footer className="font-abcd bg-t1-white relative z-50">
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-16 xl:grid xl:grid-cols-2 xl:gap-8">
                    <div className="grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
                        <div>
                            <Typography variant="h6" className="text-t1-black text-sm/6 font-semibold">
                                Leistungen
                            </Typography>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.services.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Typography variant="h6" className="text-t1-black text-sm/6 font-semibold">
                                Team One
                            </Typography>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.company.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Typography variant="h6" className="text-t1-black text-sm/6 font-semibold">
                                Resources
                            </Typography>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.resources.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-t1-black px-6 pb-8 xl:px-0">
                <div className="lg:px-px-60 mx-auto flex max-w-7xl flex-row items-end gap-2 pt-8 lg:items-center">
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-[auto_1fr] lg:gap-8">
                        <p className="text-t1-white text-sm/6 font-semibold">
                            &copy; {new Date().getFullYear()} Team One
                        </p>
                        <div className="flex flex-col gap-3 lg:flex-row lg:gap-8">
                            {navigation.legal.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-t1-white hover:text-primary text-sm/6 transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="ml-auto flex flex-row items-center gap-5">
                        {navigation.social.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-t1-white hover:text-primary transition-colors duration-200"
                                target="_blank"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
