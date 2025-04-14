import Typography from "@/components/atoms/Typography"
import { Section } from "@/components/layout/Section"
import { PAGE_THEME } from "@/constants"

const About5 = ({ pageTheme }: { pageTheme: PAGE_THEME }) => {
    return (
        <Section data-theme={pageTheme} className="bg-foreground">
            <div className="-mx-4 flex flex-wrap items-center justify-between">
                <div className="w-full px-4 lg:w-6/12">
                    <div className="relative mx-auto flex h-[500px] max-w-[440px]">
                        <div className="absolute left-0 z-30 mr-14 max-w-[270px] rounded-lg">
                            <img
                                src="https://i.ibb.co/qpHSL3Z/image-02.jpg"
                                alt="about image"
                                className="w-full rounded-lg"
                            />
                            <span className="absolute -right-14 top-6 -z-10">
                                <svg
                                    width="61"
                                    height="47"
                                    viewBox="0 0 61 47"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="15.6667"
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 15.6667 30.9998)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="44.6667"
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 44.6667 30.9998)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 30.9998)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="29.9999"
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 29.9999 30.9998)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="58.9999"
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 58.9999 30.9998)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="15.6667"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 15.6667 16.3333)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="44.6667"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 44.6667 16.3333)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 16.3333)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="29.9999"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 29.9999 16.3333)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="58.9999"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 58.9999 16.3333)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="15.6667"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 15.6667 45.3336)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="15.6667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 15.6667 1.66683)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="44.6667"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 44.6667 45.3336)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="44.6667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 44.6667 1.66683)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 45.3336)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 1.66683)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="29.9999"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 29.9999 45.3336)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="29.9999"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 29.9999 1.66683)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="58.9999"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 58.9999 45.3336)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="58.9999"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 58.9999 1.66683)"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>

                            <span className="absolute -bottom-10 left-5 z-[-1] sm:left-16">
                                <svg
                                    width="112"
                                    height="112"
                                    viewBox="0 0 112 112"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M56 96C78.0914 96 96 78.0914 96 56C96 33.9086 78.0914 16 56 16C33.9086 16 16 33.9086 16 56C16 78.0914 33.9086 96 56 96ZM56 112C86.9279 112 112 86.9279 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 86.9279 25.0721 112 56 112Z"
                                        fill="#13C296"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="absolute right-0 top-20 z-30 ml-14 max-w-[300px] rounded-lg">
                            <img
                                src="https://i.ibb.co/qpHSL3Z/image-02.jpg"
                                alt="about image"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                    <div className="sm:mt-10 lg:mt-0">
                        <Typography as="span" className="mb-2 block text-primary">
                            WHAT WE ACHIEVED
                        </Typography>
                        <Typography as="h2" variant="h2" className="mb-11 text-background">
                            We grow your business with full potential by the innovation.
                        </Typography>
                        <Typography as="h3" variant="h4" className="mb-4 text-background">
                            Company Benefits
                        </Typography>
                        <Typography className="mb-9 text-background">
                            Proin gravida nibh vel velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum
                            auctor, nisi elit consequat ipsum, nec sagittis sem, tidiomic consequat ipsum.
                        </Typography>
                        <Typography as="h3" variant="h4" className="mb-4 text-background">
                            Competitive Salary
                        </Typography>
                        <Typography className="text-background">
                            Proin gravida nibh vel velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum
                            auctor.
                        </Typography>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About5
