import Image from "next/image"

export interface ExpertProps {
    image: string
    text: string
    name: string
    position: string
}

export const Expert = ({ image, text, name, position }: ExpertProps) => {
    return (
        <div className="bg-t1-white w-full">
            <div className="bg-t1-white pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32">
                <div className="bg-t1-darkgreen py-20 sm:py-24 xl:py-24">
                    <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 xl:flex-row xl:items-stretch 2xl:px-0">
                        <div className="w-full max-w-2xl xl:w-96 xl:flex-none">
                            <div className="relative aspect-2/1 h-full xl:mx-0 xl:aspect-auto">
                                <Image
                                    alt={`Image of ${name}`}
                                    width={600}
                                    height={1000}
                                    src={image}
                                    className="absolute inset-0 size-full rounded-sm bg-gray-800 object-cover shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                            <figure className="relative isolate pt-6 sm:pt-12">
                                <blockquote className="text-t1-white text-xl/8 font-semibold sm:text-2xl/9">
                                    <p>{text}</p>
                                </blockquote>
                                <figcaption className="mt-8 text-base">
                                    <div className="text-t1-white font-semibold">{name}</div>
                                    <div className="text-t1-white mt-1">{position}</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expert
