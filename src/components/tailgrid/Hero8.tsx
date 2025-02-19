import { Link } from "@/components/atoms/Link"
import Typography from "@/components/atoms/Typography"
import { Section } from "@/components/layout/Section"
import Image from "next/image"
import HeroBG from "/public/images/optimized/hero_optimized.webp"

const Hero8 = () => {
    return (
        <>
            {/* <!-- ====== Hero Section Start --> */}
            <div className="relative h-[400px] bg-background lg:h-[600px] xl:h-[800px] 2xl:h-[1000px]">
                <div className="absolute size-full">
                    <Image src={HeroBG} alt="Hero Background Image" className="size-full object-cover" />
                </div>
                <div className="absolute left-0 top-0 size-full bg-foreground/40" />
                <Section className="relative z-50 h-full">
                    <div className="flex size-full flex-col items-center justify-center gap-4">
                        <Typography as="span" variant="paragraph" className="mb-4 block text-background">
                            We are creative team.
                        </Typography>
                        <Typography as="h1" variant="h1" className="mb-3 text-background">
                            Tech driven transformation
                        </Typography>
                        <Typography
                            as="p"
                            variant="paragraph"
                            className="mb-9 max-w-[460px] text-center text-background"
                        >
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered.
                        </Typography>
                        <ul className="flex flex-wrap items-center gap-4">
                            <li>
                                <Link href="/career" label="Career opportunities" />
                            </li>
                            <li>
                                <Link href="/services" label="Explore services" color="black" />
                            </li>
                        </ul>
                    </div>
                </Section>
            </div>
        </>
    )
}

export default Hero8
