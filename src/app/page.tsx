import { PAGE_THEME } from "@/constants"
import { blurhashToCssGradientString } from "@unpic/placeholder"

import { DancingFigures } from "@/components/atoms/DancingFigures"
import { Heading } from "@/components/atoms/Heading"
import { Image } from "@/components/atoms/Image"
import Typography from "@/components/atoms/Typography"

import { Companies } from "@/components/molecules/Companies"
import { Hero } from "@/components/molecules/Hero"

import { AnimatedTeaser } from "@/components/organisms/AnimatedTeaser"
import { ChangingWords } from "@/components/organisms/ChangingWords"
import { CtaSection } from "@/components/organisms/CtaSection"
import { HomeHumanSection } from "@/components/organisms/HomeHumanSection"
import { HomeValuesSection } from "@/components/organisms/HomeValuesSection"

import ContentWrapper from "@/components/layout/ContentWrapper"
import { FullWidthSectionContainer } from "@/components/layout/FullWidthSectionContainer"
import { PageLayout } from "@/components/layout/PageLayout"

const Home = () => {
	return (
		<PageLayout theme={PAGE_THEME.light}>
			<ContentWrapper className="mt-20">
				<FullWidthSectionContainer className="mt-0">
					<Heading
						tag="h1"
						className="max-w-[790px] text-[3rem] uppercase leading-110 tracking-aBitTighter lg:text-[3rem] lg:leading-110"
					>
						WIR <br /> ENTWICKELN <br /> DIE ZUKUNFT <br /> DES WEB.
					</Heading>
				</FullWidthSectionContainer>
			</ContentWrapper>

			<ChangingWords
				className="mb-4 hidden p-4 text-t1-darkGray sm:mt-48 sm:flex"
				smallVariant
				words={["Scroll", "Move Smoothly"]}
			/>

			<Hero
				imageNode={
					<Image
						priority
						src="/images/optimized/hero_optimized.webp"
						alt="Picture of a man at a laptop"
						layout="fullWidth"
						className="h-full"
						background={blurhashToCssGradientString("LNGk,q%MIV56OZ~psSIAX8t7azRi")}
					/>
				}
				overlayNode={<ChangingWords words={["software", "agile", "human", "team"]} className="text-white" />}
				overlayPosition="offsetTop"
			/>

			<ContentWrapper>
				<FullWidthSectionContainer className="mt-20">
					<figure className="mb-6 flex h-[129px] w-full justify-center text-primary md:hidden">
						<DancingFigures />
					</figure>
					<Typography className="text-black normal-case" variant="h2">
						Wir sind Technologie-Experten und verstehen uns als integrativer Entwicklungs- & Beratungspartner in
						komplexen Softwareprojekten.{" "}
						<DancingFigures className="hidden h-16 px-4 py-0 align-middle text-primary md:inline" />
						Mit jahrelanger Expertise in den Bereichen Softwareentwicklung, Strategie sowie UX/UI Design.
					</Typography>
				</FullWidthSectionContainer>
				<CtaSection
					className="mt-16 lg:max-w-[25%]"
					contentText="Wir helfen Organisationen dabei, sich nachhaltig zu modernen digitalen Unternehmen zu wandeln. Immer mit dem Ziel, qualitativ hochwertige, skalierbare und durchdachte Software zu entwickeln, welche messbaren Mehrwert für unsere Kunden schafft."
					contentVariant="text_sm"
					headlineVariant="h2"
					link={"/services"}
					linkLabel="Unsere Leistungen"
					linkVariant="secondary"
				/>
			</ContentWrapper>

			<AnimatedTeaser className="mt-16" />

			<ContentWrapper useMaxWidth={false} className="w-full bg-primary pt-20 sm:pt-8 md:pt-0">
				<Companies />
			</ContentWrapper>

			<HomeHumanSection />

			<HomeValuesSection />
		</PageLayout>
	)
}

export default Home
