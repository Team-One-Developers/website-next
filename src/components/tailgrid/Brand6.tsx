import Link from "next/link"

const brandsData = [
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
        altText: "Porsche",
        link: "#"
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
        altText: "DMTech",
        link: "#"
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
        altText: "Mercedes",
        link: "#"
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
        altText: "Racaro",
        link: "#"
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/plainadmin.svg",
        lightImageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/plainadmin-white.svg",
        altText: "Axel Springer",
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
            <section className="bg-white py-20 lg:py-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
                            <div className="mb-12 lg:mb-0">
                                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-4xl lg:text-[34px] 2xl:text-[38px]">
                                    Used by the world&apos;s most popular companies
                                </h2>
                                <p className="mb-10 text-base leading-relaxed text-body-color">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis
                                    lectus ut dui dapibus vestibulum. Aenean efficitur fermentum vestibulum.
                                </p>

                                <div className="flex flex-wrap">
                                    <Link
                                        href="/#"
                                        className="mb-3 mr-3 block rounded-md border border-transparent bg-primary px-7 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                                    >
                                        Know More
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="mb-3 block rounded-md border border-primary bg-transparent px-7 py-3 text-base font-medium text-primary transition hover:bg-primary hover:text-white"
                                    >
                                        Contact Us
                                    </Link>
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

const SingleImage = ({ brand }: any) => {
    const { link, imageSrc, lightImageSrc, altText } = brand
    return (
        <>
            <Link
                href={link}
                className="flex h-[110px] max-w-[188px] items-center justify-center border border-stroke px-7 hover:bg-primary/10 dark:border-primary/10 dark:hover:bg-primary/5"
            >
                <img src={imageSrc} alt={altText} className="h-10 w-full" />
            </Link>
        </>
    )
}
