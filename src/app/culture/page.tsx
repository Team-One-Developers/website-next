import {
  ContentWrapper,
  CultureBlock,
  DancingFigures,
  Heading,
  Hero,
  PageLayout,
} from '@/components'
import { FONT_CONFIGS } from '@/constants'
import Image from 'next/image'

export const Culture = () => {
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
        <DancingFigures className="absolute z-10 mt-20 h-[227px] w-[245px] text-t1-green xs:left-1/2 xs:-translate-x-[50%] xs:-translate-y-[10%] md:left-3/4 md:top-[42.5%] lg:top-[30%] lg:h-[411px] lg:w-[462px]" />
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
      <ContentWrapper>values</ContentWrapper>
    </PageLayout>
  )
}

export default Culture
