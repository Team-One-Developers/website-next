import { LinkComponent } from "@/components/atoms/LinkComponent"
import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import Image from "next/image"

export default function HeroWithImages() {
    return (
        <div className="bg-t1-white">
            <main>
                <div className="relative isolate">
                    <svg
                        aria-hidden="true"
                        className="stroke-primary absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="fill-primary overflow-visible">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect
                            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                            width="100%"
                            height="100%"
                            strokeWidth={0}
                        />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    >
                        <div
                            style={{
                                clipPath:
                                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
                            }}
                            className="from-primary to-t1-darkgreen aspect-801/1036 w-200.25 bg-linear-to-tr opacity-30"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <Section className="bg-transparent pt-36 pb-32 sm:pt-60 lg:pt-24">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <Typography variant="paragraph" className="text-t1-black">
                                        Wir machen das, wovon alle sprechen:
                                    </Typography>
                                    <Typography variant="h1" className="text-t1-black">
                                        WIR STELLEN DEN MENSCHEN IN DEN MITTELPUNKT.
                                    </Typography>
                                    {/* <Typography className="text-t1-black mt-8 sm:max-w-md lg:max-w-none">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                        commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna
                                        aliqua ad ad non deserunt sunt.
                                    </Typography> */}
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <LinkComponent
                                            href="/career#jobs"
                                            label="Unsere offenen Stellen"
                                            variant="solid"
                                            className="text-t1-black"
                                        />
                                    </div>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                                        <div className="relative">
                                            <Image
                                                alt="Culture Representing Image #1"
                                                src="/images/culture/coffetalk.webp"
                                                className="bg-t1-darkgray/5 aspect-2/3 w-full rounded object-cover shadow-lg"
                                                width={400}
                                                height={600}
                                            />
                                            <div className="ring-t1-darkgray/10 pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset" />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <Image
                                                alt="Culture Representing Image #2"
                                                src="/images/culture/officelife.webp"
                                                className="bg-t1-darkgray/5 aspect-2/3 w-full rounded-sm object-cover shadow-lg"
                                                width={400}
                                                height={600}
                                            />
                                            <div className="ring-t1-darkgray/10 pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset" />
                                        </div>
                                        <div className="relative">
                                            <Image
                                                alt="Culture Representing Image #3"
                                                src="/images/culture/coding.webp"
                                                className="bg-t1-darkgray/5 aspect-2/3 w-full rounded-sm object-cover shadow-lg"
                                                width={400}
                                                height={600}
                                            />
                                            <div className="ring-t1-darkgray/10 pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <Image
                                                alt="Culture Representing Image #4"
                                                src="/images/culture/magazine.png"
                                                className="bg-t1-darkgray/5 aspect-2/3 w-full rounded-sm object-cover shadow-lg"
                                                width={400}
                                                height={600}
                                            />
                                            <div className="ring-t1-darkgray/10 pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset" />
                                        </div>
                                        <div className="relative">
                                            <Image
                                                alt="Culture Representing Image #5"
                                                src="/images/culture/paul.png"
                                                className="bg-t1-darkgray/5 aspect-2/3 w-full rounded-sm object-cover shadow-lg"
                                                width={400}
                                                height={600}
                                            />
                                            <div className="ring-t1-darkgray/10 pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                </div>
            </main>
        </div>
    )
}
