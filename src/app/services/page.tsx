'use client'

import { ReactElement } from 'react'
import Image from 'next/image'
import { FONT_CONFIGS } from '@/constants'
import { useMediaQuery } from 'usehooks-ts'

import Copy from '@/components/atoms/Copy'
import { Heading } from '@/components/atoms/Heading'
import { TopLine } from '@/components/atoms/Topline'

import { Hero } from '@/components/molecules/Hero'

import { ChangingWords } from '@/components/organisms/ChangingWords'
import { Competences } from '@/components/organisms/Competences'
import { ReferencesSlider } from '@/components/organisms/ReferenceSlider'
import { TechStacks } from '@/components/organisms/TechStacks'
import { UxDesign } from '@/components/organisms/UxDesign'
import { UxDesignMobile } from '@/components/organisms/UxDesignMobile'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { FullWidthSectionContainer } from '@/components/layout/FullWidthSectionContainer'
import { PageLayout } from '@/components/layout/PageLayout'

const Services = () => {
  const isXl = useMediaQuery('(min-width: 1200px)')

  return (
    <PageLayout>
      <ContentWrapper className="mt-20 lg:flex gap-[15%]">
        <Heading
          className="lg:basis-[35%]"
          tag="h1"
          fontDefaults={FONT_CONFIGS.desktop_h3}
        >
          Wir schaffen nachhaltige Mehrwerte durch exzellente Software &
          menschenzentrierte Arbeitsweisen.
        </Heading>

        <div className="mt-16 lg:mt-0 basis-[32.5%]">
          <Image
            src="/images/icons/world-1.svg"
            alt="Globe Icon"
            width={18}
            height={18}
            className="mb-4"
          />
          <Copy
            className="mb-8 text-t1-green"
            textSize="l"
            fontDefaults={FONT_CONFIGS.desktop_copy_large}
          >
            Digitale Geschäftsmodelle, digitale Kunden und remote-first Teams
            erfordern modernere Methoden, Technologien und Geisteshaltungen als
            die klassische Welt. Als Software-Beratung befähigen wir unsere
            Kunden, im digitalen Wettbewerb erfolgreich zu sein - strategisch,
            technologisch und methodisch.
          </Copy>
          <Copy
            className=" text-t1-white"
            textSize="sm"
            fontDefaults={FONT_CONFIGS.desktop_copy_small}
          >
            Wir kombinieren umfassendes Fachwissen mit der Begeisterung für neue
            Technologien, um innovative, hochmoderne, stabile und skalierbare
            Enterprise Plattformen zu bauen. Vom Startup bis hin zum
            multinationalen Konzern.
          </Copy>
        </div>
      </ContentWrapper>

      <Hero
        className="mt-[4.5rem] lg:mt-[11rem]"
        imageNode={
          <Image
            src="/images/t1d_nov22_149.jpg"
            alt="Picture of office life"
            fill
            style={{ objectFit: 'cover' }}
          />
        }
        overlayNode={
          <>
            <TopLine
              className="mb-6"
              colorClassName="text-t1-white"
              textSize="l"
              opacity={1}
            >
              We Develop
            </TopLine>
            <ChangingWords
              words={['Software', 'Strategy', 'UX Design']}
              delay={1250}
              className="text-t1-white"
            />
          </>
        }
      />
      <ReferencesSlider />
      <TechStacks />
      <Competences />
      <FullWidthSectionContainer className="mt-20 lg:mt-48">
        {isXl ? <UxDesign /> : <UxDesignMobile />}
      </FullWidthSectionContainer>
    </PageLayout>
  )
}

export default Services
