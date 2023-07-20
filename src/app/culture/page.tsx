import { Metadata } from 'next'

import { DancingFigures } from '@/components/atoms/DancingFigures'
import { Heading } from '@/components/atoms/Heading'
import { Image } from '@/components/atoms/Image'
import Typography from '@/components/atoms/Typography'

import { Hero } from '@/components/molecules/Hero'

import { CultureBlock } from '@/components/organisms/CultureBlock'
import { Values } from '@/components/organisms/Values'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { PageLayout } from '@/components/layout/PageLayout'

export const metadata: Metadata = {
  title: 'Culture',
}

const Culture = () => {
  return (
    <PageLayout>
      <ContentWrapper className="relative mt-20">
        <Typography as="h1" variant="h2" className="lg:max-w-[calc(50%-2rem)]">
          WIR MACHEN DAS, WOVON ALLE SPRECHEN: WIR STELLEN DEN MENSCHEN IN DEN
          MITTELPUNKT.
        </Typography>
        <DancingFigures className="absolute z-10 mt-20 h-[227px] w-[245px] text-primary xs:left-1/2 xs:-translate-x-[50%] xs:-translate-y-[10%] md:left-3/4 md:top-[42.5%] lg:top-[30%] lg:h-[411px] lg:w-[462px]" />
      </ContentWrapper>
      <Hero
        className="mt-[19rem]"
        imageNode={
          <Image
            background="auto"
            src="/images/optimized/t1d_nov22_153_optimized.webp"
            alt="A man working at his laptop"
            layout="fullWidth"
            className="h-full"
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
