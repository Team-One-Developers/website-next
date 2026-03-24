import Tag from "@/components/atoms/Tag"
import cn from "@/utils/cn"
import Image from "next/image"

interface EventCardProps {
    title: string
    date: string
    client?: string
    category?: string
    image?: string
    className?: string
}

export default function EventCard({ title, date, client, category, image, className }: EventCardProps) {
    return (
        <div className={cn("gap-sm row-span-3 grid grid-rows-subgrid", className)}>
            {/* Image or colored placeholder */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                {image ? (
                    <Image src={image} alt={title} fill className="object-cover" />
                ) : (
                    <div className="flex h-full w-full items-end bg-black p-6">
                        {client && (
                            <span className="font-gteratext text-small text-white/70">{client}</span>
                        )}
                    </div>
                )}
            </div>

            {/* Title */}
            <h3 className="font-gteradisplay text-h3 pt-lg max-w-130 self-end text-black">{title}</h3>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2">
                <Tag label={date} />
                {category && <Tag label={category} />}
            </div>
        </div>
    )
}
