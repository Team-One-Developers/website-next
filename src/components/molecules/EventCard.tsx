import Tag from "@/components/atoms/Tag"
import cn from "@/utils/cn"
import Image from "next/image"

interface EventCardProps {
    title: string
    date: string
    client?: string
    category?: string
    image?: string
    location?: string
    description?: string
    className?: string
}

export default function EventCard({
    title,
    date,
    client,
    category,
    image,
    location,
    description,
    className
}: EventCardProps) {
    return (
        <div className={cn("gap-sm row-span-3 grid grid-rows-subgrid", className)}>
            {/* Image or colored placeholder */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                {image ? (
                    <Image src={image} alt={title} fill className="object-cover" />
                ) : (
                    <div className="flex h-full w-full items-end bg-black p-6">
                        {client && <span className="font-gteratext text-small text-white/70">{client}</span>}
                    </div>
                )}
            </div>

            {/* Title + description */}
            <div className="pt-lg flex flex-col gap-2">
                <h3 className="font-gteradisplay text-h3 max-w-130 text-black">{title}</h3>
                {description && <p className="font-gteratext text-small line-clamp-3 text-black/60">{description}</p>}
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2">
                <Tag label={date} />
                {location && <Tag label={location} />}
                {category && <Tag label={category} />}
            </div>
        </div>
    )
}
