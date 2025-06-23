import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import Image from "next/image"
import Link from "next/link"

export interface ServiceInfoProps {
    title: string
    description: string
    image?: string
    alt: string
    textBlocks: {
        title: string
        description: string
    }[]
    link?: {
        href: string
        label: string
    }
}

export const ServiceInfo = ({ title, description, image, alt, textBlocks, link }: ServiceInfoProps) => {
    return (
        <Section className="bg-t1-white pt-6">
            <div className="text-t1-black grid grid-cols-1 gap-14 rounded-lg bg-white p-12 md:grid-cols-2">
                <div className="flex flex-col gap-8">
                    <Typography
                        as="h2"
                        variant="h4"
                        className="font-spacegrotesk text-t1-black text-3xl font-bold uppercase"
                    >
                        {title}
                    </Typography>
                    <Typography variant="paragraph">{description}</Typography>
                    {image && (
                        <Image
                            src={image}
                            alt={alt}
                            width={300}
                            height={200}
                            className="w-full object-cover lg:w-1/2"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    {textBlocks.map((block, index) => (
                        <div key={index}>
                            <Typography
                                as="h2"
                                variant="h6"
                                className="font-spacegrotesk text-t1-black text-lg font-extrabold uppercase"
                            >
                                {block.title}
                            </Typography>
                            <Typography variant="paragraph" className="text-t1-black mt-2">
                                {block.description}
                            </Typography>
                        </div>
                    ))}
                    {link && (
                        <Link
                            href={link.href}
                            className="group text-t1-black border-t1-black hover:bg-primary mt-12 w-fit border p-2"
                        >
                            {link.label}
                            <span aria-hidden="true" className="ml-2 transition-all duration-300 group-hover:ml-3">
                                &rarr;
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </Section>
    )
}
//                     <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-primary">
export default ServiceInfo
