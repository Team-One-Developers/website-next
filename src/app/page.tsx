import { PageLayout } from "@/components/layout/PageLayout"
import About1 from "@/components/tailgrid/About1"
import About5 from "@/components/tailgrid/About5"
import Brand6 from "@/components/tailgrid/Brand6"
import Cta7 from "@/components/tailgrid/Cta7"
import Hero8 from "@/components/tailgrid/Hero8"
import Service6 from "@/components/tailgrid/Services6"
import { PAGE_THEME } from "@/constants"

const Home = () => {
    return (
        <PageLayout theme={PAGE_THEME.light} tickerTheme={PAGE_THEME.light}>
            <Hero8 />
            <Service6 />
            <Brand6 />
            <About1 />
            <Cta7 />
            <About5 />
        </PageLayout>
    )
}

export default Home
