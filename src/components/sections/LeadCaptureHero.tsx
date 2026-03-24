import HubspotForm from "@/components/sections/HubspotForm"
import Image from "next/image"

export interface LeadCaptureHeroProps {
    image: { src: string; alt: string; width: number; height: number; blurDataURL: string }
    title: string
    description: string
    formId: string
    portalId: string
}

export const LeadCaptureHero = ({ image, title, description, formId, portalId }: LeadCaptureHeroProps) => {
    return (
        <div className="flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
            <Image
                priority
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                className="hidden md:block md:w-[45%]"
            />
            <div className="bg-t1-white flex w-full flex-col gap-4 rounded-xl px-10 py-12 md:w-[45%]">
                <h3 className="font-gteradisplay text-h3 text-black">{title}</h3>
                <p className="font-gteratext text-small text-black-soft">{description}</p>

                {portalId && formId ? (
                    <HubspotForm formId={formId} portalId={portalId} />
                ) : (
                    <p className="font-gteratext text-small text-black-soft">Form not available</p>
                )}
            </div>
        </div>
    )
}

export default LeadCaptureHero
