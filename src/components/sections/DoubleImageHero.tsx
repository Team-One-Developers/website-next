import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import Image from "next/image"
import Link from "next/link"

export default function DoubleImageHero() {
    return (
        <Section className="bg-background overflow-hidden pt-20 pb-12 lg:pt-8 lg:pb-[90px]">
            <div className="-mx-4 mb-16 flex flex-wrap">
                <div className="w-full px-4 lg:w-8/12">
                    <div className="overflow-hidden rounded-sm">
                        <Image
                            src="/images/culture/officelife.webp"
                            alt="Büro Bild"
                            className=""
                            width={1200}
                            height={800}
                        />
                    </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                    <div>
                        <Link href="/career#careers" className="text-foreground mb-7">
                            <svg
                                width="120"
                                height="120"
                                viewBox="0 0 120 120"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-7 hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-90 lg:mt-0 lg:block"
                            >
                                <g clipPath="url(#clip0_2143_23490)">
                                    <rect
                                        x="30.7236"
                                        y="30.7236"
                                        width="57.7533"
                                        height="57.7533"
                                        rx="28.8767"
                                        stroke="currentColor"
                                        strokeOpacity="0.5"
                                        strokeWidth="1.44383"
                                    />
                                    <path
                                        d="M52.697 67.4373C52.4533 67.4373 52.2097 67.3561 52.0473 67.1531C51.6818 66.7876 51.6818 66.2191 52.0473 65.8536L64.3514 53.5494H54.5243C54.037 53.5494 53.631 53.1434 53.631 52.6561C53.631 52.1688 54.037 51.7627 54.5243 51.7627H66.5036C66.9909 51.7627 67.397 52.1688 67.397 52.6561V64.7166C67.397 65.2039 66.9909 65.61 66.5036 65.61C66.0164 65.61 65.6103 65.2039 65.6103 64.7166V54.9301L53.3467 67.1937C53.1843 67.3561 52.9406 67.4373 52.697 67.4373Z"
                                        fill="currentColor"
                                    />
                                    <circle cx="21" cy="21" r="2" fill="currentColor" />
                                    <circle cx="95.4609" cy="95.7056" r="2" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2143_23490">
                                        <rect width="119.2" height="119.2" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <div className="hidden overflow-hidden rounded-sm lg:block">
                            <Image
                                src="/images/culture/coding.webp"
                                alt="about image"
                                width={500}
                                height={800}
                                className="w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-0 lg:-mt-12">
                <div className="mb-11 w-full max-w-[970px]">
                    <span className="text-primary mb-2 block text-lg font-semibold uppercase">OUR MISSION</span>
                    <Typography as="h1" variant="h1" className="text-t1-white mb-3">
                        Unser Team - <span className="font-bold">Dein </span> Playground
                    </Typography>

                    <Typography className="">Your journey to digital excellence starts here.</Typography>
                </div>

                {/* <div className="grid gap-8 md:grid-cols-2 lg:gap-[70px]">
                        <div>
                            <Typography className="">
                                Proin gravida nibh velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum
                                auctor, nisi elit consequat ipsum, nec sagittis sem, tidiomic consequat ipsum bibendum
                                auctor, nisi elit consequat ipsum, nec sagittis sem, tidiomic .
                            </Typography>
                        </div>

                        <div>
                            <Typography className="">
                                Proin gravida nibh velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum
                                auctor, nisi elit consequat ipsum, nec sagittis sem, tidiomic consequat ipsum bibendum
                                auctor, nisi elit consequat ipsum, nec sagittis sem, tidiomic .
                            </Typography>
                        </div>
                    </div> */}
            </div>
        </Section>
    )
}
