import Typography from "@/components/atoms/Typography"
import HubspotForm from "@/components/sections/HubspotForm"
import Image from "next/image"

export interface LeadCaptureHeroProps {
    image: { src: string; alt: string; width: number; height: number }
    title: string
    description: string
    formId: string
    portalId: string
}

export const LeadCaptureHero = ({ image, title, description, formId, portalId }: LeadCaptureHeroProps) => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 py-12 md:flex-row">
            <Image
                priority
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full md:w-[45%]"
            />
            <div className="bg-t1-white flex w-full flex-col gap-4 rounded-xl px-10 py-12 md:w-[45%]">
                <Typography variant="h3" className="text-t1-black">
                    {title}
                </Typography>
                <Typography className="text-t1-black">{description}</Typography>

                {portalId && formId ? (
                    <HubspotForm formId={formId} portalId={portalId} />
                ) : (
                    <Typography className="text-t1-black">Form not available</Typography>
                )}
            </div>
        </div>
    )
}

export default LeadCaptureHero
