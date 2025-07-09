import Typography from "@/components/atoms/Typography"

export const DraftMarker = () => {
    return (
        <div className="fixed top-0 left-1/2 z-[1000] w-fit -translate-x-1/2 bg-red-600 p-4">
            <Typography as="h2" variant="h2">
                DRAFT
            </Typography>
        </div>
    )
}
