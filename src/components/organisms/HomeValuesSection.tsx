'use client'

import { useInView } from 'react-intersection-observer'

import { Image } from '@/components/atoms/Image'

import { ImageMask } from '../atoms/ImageMask'
import { CenteredSectionContainer } from '../layout/CenteredSectionContainer'
import ContentWrapper from '../layout/ContentWrapper'
import { CtaSection } from './CtaSection'

export const HomeValuesSection = () => {
  // Triggers Zoom Animation for second Image
  const [careerPictureRef, careerPictureInView] = useInView({
    threshold: 0.45,
  })

  // Triggers Fade In Animation for the Career Call To Action
  const [careerContainerRef, careerContainerInView] = useInView({
    threshold: 0.45,
    triggerOnce: true,
  })

  return (
    <ContentWrapper
      ref={careerContainerRef}
      className={careerContainerInView ? 'bg-background' : 'bg-primary'}
      style={{ transition: '500ms' }}
      useMaxWidth={false}
    >
      <CenteredSectionContainer
        left={
          <ImageMask ref={careerPictureRef} className="justify-[right]">
            <figure
              style={{
                transition: '500ms',
                transform: careerPictureInView ? 'scale(1.1)' : '',
              }}
            >
              <Image
                background="auto"
                src="/images/optimized/t1d_kai_knoerzer_055_optimized.webp"
                alt="Picture of a men posing"
                layout="fullWidth"
              />
            </figure>
          </ImageMask>
        }
        right={
          <CtaSection
            subtitleText="CAREER @ T1D"
            headlineText="Nur wer Werte vertritt, kann Werte schaffen."
            contentText={
              'Team One Developers ist für uns nicht nur ein Name, sondern ein Versprechen: Das Versprechen den Unterschied zu machen, nicht nur Standard sondern die beste Wahl zu sein. Für unsere Partner und ganz besonders für unsere Kollegen'
            }
            headlineVariant="h2"
            contentVariant="text_sm"
            headlineClassName="mb-[2.875rem]"
            linkLabel="Karriere"
            link="/career"
            linkVariant="secondary"
          >
            <Image
              src="/images/icons/world-1.svg"
              alt="Person Icon"
              width={18}
              height={18}
              className="mr-2 brightness-0"
            />
          </CtaSection>
        }
        rightComponentClass="md:w-[65%]"
      />
    </ContentWrapper>
  )
}
