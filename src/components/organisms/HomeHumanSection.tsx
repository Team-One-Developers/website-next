'use client'

import { useInView } from 'react-intersection-observer'

import { Image } from '@/components/atoms/Image'

import { ImageMask } from '../atoms/ImageMask'
import ContentWrapper from '../layout/ContentWrapper'
import { CtaSection } from './CtaSection'

export const HomeHumanSection = () => {
  // Triggers Zoom Animation for first image
  const [culturePictureRef, culturePictureInView] = useInView({
    threshold: 0.48425,
  })

  // Triggers Fade In Animation for the Culture Call To Action
  const [cultureContainerRef, cultureContainerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <ContentWrapper
      ref={cultureContainerRef}
      useMaxWidth={false}
      className="bg-primary pt-32 sm:pt-48 lg:flex lg:justify-between lg:gap-8 xl:pt-72"
      style={{ transition: '500ms' }}
    >
      <CtaSection
        className="basis-[37%] lg:grow-0"
        subtitleText="CULTURE @ T1D"
        headlineText="Wir sind menschen&shy;zentriert."
        contentText='Wir glauben an Fortschritt durch Technologie, an Nachhaltigkeit durch Qualität sowie an die Prinzipien des agilen Manifests. Und vor allem glauben wir an die "Zielgruppe Mensch", die im Mittelpunkt unseres Handelns stehen muss.'
        linkLabel="Unsere Kultur"
        link="/culture"
        animate={!cultureContainerInView}
        headlineClassName="mb-24"
        headlineVariant="h2"
        contentVariant="text_sm"
      >
        <Image
          src="/images/icons/person-1.svg"
          alt="Person Icon"
          width={16}
          height={15}
          className="mr-2 brightness-0"
        />
      </CtaSection>
      <ImageMask ref={culturePictureRef} className="md:max-w-[50%]">
        <figure
          className=""
          style={{
            transition: '500ms',
            transform: culturePictureInView ? 'scale(1.1)' : '',
          }}
        >
          <Image
            src="/images/optimized/t1d_kai_knoerzer_011_edited_optimized.webp"
            alt="Picture of a men posing"
          />
        </figure>
      </ImageMask>
    </ContentWrapper>
  )
}
