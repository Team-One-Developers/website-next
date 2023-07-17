import Image from 'next/image'
import { FONT_CONFIGS } from '@/constants'

import { DancingFigures } from '@/components/atoms/DancingFigures'
import { Heading } from '@/components/atoms/Heading'

import { Hero } from '@/components/molecules/Hero'

import { CultureBlock } from '@/components/organisms/CultureBlock'
import { Values } from '@/components/organisms/Values'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { PageLayout } from '@/components/layout/PageLayout'

const Culture = () => {
  return (
    <PageLayout>
      <ContentWrapper className="relative mt-20">
        <Heading
          tag="h1"
          fontDefaults={FONT_CONFIGS.desktop_h3}
          className="lg:max-w-[calc(50%-2rem)]"
        >
          WIR MACHEN DAS, WOVON ALLE SPRECHEN: WIR STELLEN DEN MENSCHEN IN DEN
          MITTELPUNKT.
        </Heading>
        <DancingFigures className="absolute z-10 mt-20 h-[227px] w-[245px] text-primary xs:left-1/2 xs:-translate-x-[50%] xs:-translate-y-[10%] md:left-3/4 md:top-[42.5%] lg:top-[30%] lg:h-[411px] lg:w-[462px]" />
      </ContentWrapper>
      <Hero
        className="mt-[19rem]"
        imageNode={
          <Image
            src="/images/t1d_nov22_153.jpg"
            alt="A man working at his laptop"
            fill
            style={{ objectFit: 'cover' }}
          />
        }
        overlayNode={null}
      />
      <ContentWrapper>
        <CultureBlock />
      </ContentWrapper>
      <ContentWrapper>
        <Values />
      </ContentWrapper>
    </PageLayout>
  )
}

export default Culture
