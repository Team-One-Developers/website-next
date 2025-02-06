import Typography from "@/components/atoms/Typography"
import { Section } from "@/components/layout/Section"
import Image from "next/image"
import Link from "next/link"
import HeroBG from "/public/images/optimized/hero_optimized.webp"

const Hero8 = () => {
    return (
        <>
            {/* <!-- ====== Hero Section Start --> */}
            <div className="relative -mt-[72px] h-[400px] bg-background lg:h-[600px] xl:h-[800px] 2xl:h-[1000px]">
                <div className="absolute size-full">
                    <Image src={HeroBG} alt="Hero Background Image" className="size-full object-cover" />
                </div>
                <div className="absolute left-0 top-0 size-full bg-background/70" />
                <Section className="relative z-50 h-full">
                    <div className="flex size-full flex-col items-center justify-center gap-4">
                        <Typography as="span" variant="paragraph" className="mb-4 block text-foreground">
                            We are creative team.
                        </Typography>
                        <Typography as="h1" variant="h1" className="mb-3 text-foreground">
                            Tech driven transformation
                        </Typography>
                        <Typography
                            as="p"
                            variant="paragraph"
                            className="mb-9 max-w-[460px] text-center text-foreground"
                        >
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered.
                        </Typography>
                        <ul className="flex flex-wrap items-center gap-4">
                            <li>
                                <Link
                                    href="/career"
                                    className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-base font-medium text-background"
                                >
                                    Career opportunities
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="shadow-1 hover:bg-gray-2 hover:text-body-color inline-flex items-center rounded-full bg-foreground px-6 py-3 text-base font-medium text-background"
                                >
                                    Explore Services
                                    <span className="ml-2">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3437 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2813 11.0312 17.2813C11.2187 17.2813 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                                                fill=""
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Section>
            </div>
        </>
    )
}

export default Hero8
