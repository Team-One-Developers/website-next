import { Link } from "@/components/atoms/Link"
import Typography from "@/components/atoms/Typography"

const brandsData = [
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
        altText: "GrayGrids",
        link: "#"
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
        altText: "lineicons",
        link: "#"
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
        altText: "uideck",
        link: "#"
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
        altText: "ayroui",
        link: "#"
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/plainadmin.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/plainadmin-white.svg",
        altText: "plainadmin",
        link: "#"
    },
    {
        imageSrc: "https://tailadmin.com/images/logo/logo-light.svg",
        lightImageSrc: "https://tailadmin.com/images/logo/logo-dark.svg",
        altText: "tailadmin",
        link: "#"
    }
]

const Brand6 = () => {
    return (
        <>
            <section className="bg-foreground py-20 lg:py-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
                            <div className="mb-12 lg:mb-0">
                                <Typography as="h2" variant="h2" className="mb-5 text-background">
                                    Used by the world&apos;s most popular companies
                                </Typography>
                                <Typography as="p" variant="paragraph" className="mb-10 text-background">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis
                                    lectus ut dui dapibus vestibulum. Aenean efficitur fermentum vestibulum.
                                </Typography>

                                <div className="flex gap-4">
                                    <Link href="/services" color="primary" label="Know more" />
                                    <Link href="/contact" color="white" label="Contact Us" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12 xl:w-7/12">
                            <div className="flex flex-wrap items-center justify-center">
                                {brandsData.map((brand, i) => (
                                    <SingleImage key={i} brand={brand} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand6

const SingleImage = ({ brand }: { brand: (typeof brandsData)[0] }) => {
    const { link, imageSrc, lightImageSrc, altText } = brand
    return (
        <>
            <a
                href={link}
                className="border-stroke flex h-[110px] max-w-[188px] items-center justify-center border px-7 hover:bg-primary/10"
            >
                <img src={imageSrc} alt={altText} className="h-10 w-full" />
                <img src={lightImageSrc} alt={altText} className="hidden h-10 w-full" />
            </a>
        </>
    )
}
