import Image from "next/image"
import Link from "next/link"

const Hero8 = ({}) => {
    return (
        <div className="relative pt-[120px] md:pt-[150px] lg:py-[180px]">
            <Image src="/images/hero.jpg" alt="Hero Image" fill className="absolute left-0 top-0 z-0" />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-foreground opacity-50" />
            <div className="container relative z-50 mx-auto">
                <div className="-mx-4 flex justify-center">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="mb-14 flex flex-col items-center justify-center lg:mb-0">
                            <span className="mb-4 block text-center text-base font-medium text-white">
                                We are creative team.
                            </span>
                            <h1 className="mb-3 text-center text-4xl font-bold !leading-[1.208] text-white md:text-5xl lg:text-[40px] xl:text-5xl">
                                Tech driven Transformation
                            </h1>
                            <p className="mb-9 max-w-[460px] text-center text-base font-medium text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered.
                            </p>
                            <ul className="flex flex-wrap items-center justify-center gap-4">
                                <li>
                                    <Link
                                        href="/#"
                                        className="hover:bg-blue-dark inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-base font-medium text-black"
                                    >
                                        Discover More
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#"
                                        className="shadow-1 hover:bg-gray-2 hover:text-body-color inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-black"
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero8
