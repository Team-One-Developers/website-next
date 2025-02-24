import Typography from "@/components/atoms/Typography"
import { Section } from "@/components/layout/Section"
import Image from "next/image"

const Testimonial3 = ({ person = "timo" }: { person: "timo" | "melanie" }) => {
    const people = {
        timo: {
            image: "/images/optimized/t1d_kai_knoerzer_126_optimized.webp",
            name: "Timo Brückel",
            position: "Founding Partner & CEO",
            details: "Experienced in Digital Product and Business Development & Customer-centric Organization Design."
        },
        melanie: {
            image: "/images/t1d_nov22_202.jpg",
            name: "Melanie Hengesbach",
            position: "Chief of Staff",
            details:
                "Experienced in managing and leading a team of professionals, with a focus on innovation and growth."
        }
    }

    return (
        <>
            <Section>
                <div className="container mx-auto">
                    <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                        <Typography as="span" variant="subtitle" className="mb-2 block">
                            Interested?
                        </Typography>
                        <Typography as="h2" variant="h2" className="mb-3">
                            Contact Me
                        </Typography>
                        <Typography className="">
                            There are many variations of passages of Lorem Ipsum available but the majority have
                            suffered alteration in some form.
                        </Typography>
                    </div>
                    <SingleTestimonial
                        image={people[person].image}
                        name={people[person].name}
                        position={people[person].position}
                        details={people[person].details}
                    />
                </div>
            </Section>
        </>
    )
}

export default Testimonial3

interface TestimonialProps {
    image: string
    details: string
    name: string
    position: string
}

const SingleTestimonial = ({ image, details, name, position }: TestimonialProps) => {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
                <div className="group relative items-center rounded-lg bg-foreground px-10 py-10 hover:cursor-pointer hover:bg-foreground/95 md:flex lg:px-[70px]">
                    <div className="relative z-10 mb-12 h-[165px] w-full max-w-[165px] rounded-full md:mb-0">
                        <Image
                            src={image}
                            alt="image"
                            fill
                            className="w-full rounded-full transition-all duration-200 group-hover:scale-110"
                            style={{ objectFit: "cover" }}
                        />
                        <div className="absolute left-0 top-0 z-[-1]">
                            <svg
                                width="160"
                                height="160"
                                viewBox="0 0 160 160"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="-6.88525"
                                    y="18.9728"
                                    width="36.731"
                                    height="209.602"
                                    rx="18.3655"
                                    transform="rotate(-45 -6.88525 18.9728)"
                                    fill="#13C296"
                                />
                            </svg>
                        </div>
                        <div className="absolute -left-2 top-5 z-[-2]">
                            <svg
                                width="152"
                                height="152"
                                viewBox="0 0 152 152"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="-5"
                                    y="12.5433"
                                    width="24.9386"
                                    height="204.237"
                                    rx="12.4693"
                                    transform="rotate(-45 -5 12.5433)"
                                    fill="#3056D3"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full pl-0 md:pl-14">
                        <Typography className="mb-6 text-base text-background">{details}</Typography>
                        <Typography as="h4" variant="h4" className="mb-1 text-lg font-semibold text-background">
                            {name}
                        </Typography>
                        <Typography className="italic text-background">{position}</Typography>
                    </div>
                    <div>
                        <span className="absolute -bottom-5 -left-5 z-[-1]">
                            <DotShape />
                        </span>
                        <span className="absolute -right-4 -top-7">
                            <svg
                                width="58"
                                height="60"
                                viewBox="0 0 58 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M23 59.2671C23 44.8581 23 33.1774 23 33.1774C39.0163 33.1774 52 44.8581 52 59.2671C52 59.2671 52 59.2671 23 59.2671Z"
                                    fill="#13C296"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M57 49.7009C57 22.8041 57 1 57 1C26.0721 1 1 22.8041 1 49.7009C1 49.7009 1 49.7009 57 49.7009Z"
                                    stroke="#3056D3"
                                    strokeWidth="1.5"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DotShape = () => {
    return (
        <>
            <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="1.66343"
                    cy="74.5221"
                    r="1.66343"
                    transform="rotate(-90 1.66343 74.5221)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="1.66343"
                    cy="30.94"
                    r="1.66343"
                    transform="rotate(-90 1.66343 30.94)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="16.3016"
                    cy="74.5221"
                    r="1.66343"
                    transform="rotate(-90 16.3016 74.5221)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="16.3016"
                    cy="30.94"
                    r="1.66343"
                    transform="rotate(-90 16.3016 30.94)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="30.9398"
                    cy="74.5221"
                    r="1.66343"
                    transform="rotate(-90 30.9398 74.5221)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="30.9398"
                    cy="30.94"
                    r="1.66343"
                    transform="rotate(-90 30.9398 30.94)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="45.578"
                    cy="74.5221"
                    r="1.66343"
                    transform="rotate(-90 45.578 74.5221)"
                    fill="#13C296"
                ></circle>
                <circle cx="45.578" cy="30.94" r="1.66343" transform="rotate(-90 45.578 30.94)" fill="#13C296"></circle>
                <circle
                    cx="60.2162"
                    cy="74.5216"
                    r="1.66343"
                    transform="rotate(-90 60.2162 74.5216)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="74.6634"
                    cy="74.5216"
                    r="1.66343"
                    transform="rotate(-90 74.6634 74.5216)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="60.2162"
                    cy="30.9398"
                    r="1.66343"
                    transform="rotate(-90 60.2162 30.9398)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="74.6634"
                    cy="30.9398"
                    r="1.66343"
                    transform="rotate(-90 74.6634 30.9398)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="1.66343"
                    cy="59.8839"
                    r="1.66343"
                    transform="rotate(-90 1.66343 59.8839)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="1.66343"
                    cy="16.3017"
                    r="1.66343"
                    transform="rotate(-90 1.66343 16.3017)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="16.3016"
                    cy="59.8839"
                    r="1.66343"
                    transform="rotate(-90 16.3016 59.8839)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="16.3016"
                    cy="16.3018"
                    r="1.66343"
                    transform="rotate(-90 16.3016 16.3018)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="30.9398"
                    cy="59.8839"
                    r="1.66343"
                    transform="rotate(-90 30.9398 59.8839)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="30.9398"
                    cy="16.3018"
                    r="1.66343"
                    transform="rotate(-90 30.9398 16.3018)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="45.578"
                    cy="59.8839"
                    r="1.66343"
                    transform="rotate(-90 45.578 59.8839)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="45.578"
                    cy="16.3018"
                    r="1.66343"
                    transform="rotate(-90 45.578 16.3018)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="60.2162"
                    cy="59.8839"
                    r="1.66343"
                    transform="rotate(-90 60.2162 59.8839)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="74.6634"
                    cy="59.8839"
                    r="1.66343"
                    transform="rotate(-90 74.6634 59.8839)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="60.2162"
                    cy="16.3017"
                    r="1.66343"
                    transform="rotate(-90 60.2162 16.3017)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="74.6634"
                    cy="16.3017"
                    r="1.66343"
                    transform="rotate(-90 74.6634 16.3017)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="1.66343"
                    cy="45.2455"
                    r="1.66343"
                    transform="rotate(-90 1.66343 45.2455)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="1.66343"
                    cy="1.66347"
                    r="1.66343"
                    transform="rotate(-90 1.66343 1.66347)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="16.3016"
                    cy="45.2455"
                    r="1.66343"
                    transform="rotate(-90 16.3016 45.2455)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="16.3016"
                    cy="1.66347"
                    r="1.66343"
                    transform="rotate(-90 16.3016 1.66347)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="30.9398"
                    cy="45.2455"
                    r="1.66343"
                    transform="rotate(-90 30.9398 45.2455)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="30.9398"
                    cy="1.66347"
                    r="1.66343"
                    transform="rotate(-90 30.9398 1.66347)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="45.578"
                    cy="45.2455"
                    r="1.66343"
                    transform="rotate(-90 45.578 45.2455)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="45.578"
                    cy="1.66347"
                    r="1.66343"
                    transform="rotate(-90 45.578 1.66347)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="60.2162"
                    cy="45.2457"
                    r="1.66343"
                    transform="rotate(-90 60.2162 45.2457)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="74.6634"
                    cy="45.2457"
                    r="1.66343"
                    transform="rotate(-90 74.6634 45.2457)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="60.2162"
                    cy="1.66371"
                    r="1.66343"
                    transform="rotate(-90 60.2162 1.66371)"
                    fill="#13C296"
                ></circle>
                <circle
                    cx="74.6634"
                    cy="1.66371"
                    r="1.66343"
                    transform="rotate(-90 74.6634 1.66371)"
                    fill="#13C296"
                ></circle>
            </svg>
        </>
    )
}
