interface StructuredDataProps {
    data: object
}

export const StructuredData = ({ data }: StructuredDataProps) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({ "@context": "https://schema.org", ...data })
            }}
            key="product-jsonld"
        />
    )
}

export default StructuredData
