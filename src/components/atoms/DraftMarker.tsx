import Typography from "@/components/atoms/Typography"

export const DraftMarker = () => {
    return (
        <div className="fixed left-1/2 top-0 z-[1000] w-fit bg-red-600 p-4">
            <Typography as="h2" variant="h2">
                DRAFT
            </Typography>
        </div>
    )
}
