import {
  ChangingWords,
  ContentWrapper,
  Footer,
  FullWidthSectionContainer,
  Header,
  Heading,
  Ticker,
} from '@/components'
import { PAGE_THEME } from '@/constants'
import Image from 'next/image'

export const Home = () => {
  return (
    <div className="bg-theme-bgColor text-theme-textColor" data-theme="light">
      <Header theme={PAGE_THEME.light} />
      <main className="">
        <ContentWrapper className="mt-20">
          <FullWidthSectionContainer marginTopClassName="mt-0">
            <Heading
              tag="h1"
              className="max-w-[790px] text-[3rem] uppercase leading-110 tracking-aBitTighter lg:text-[3rem] lg:leading-110"
            >
              WIR <br /> ENTWICKELN <br /> DIE ZUKUNFT <br /> DES WEB.
            </Heading>
          </FullWidthSectionContainer>
        </ContentWrapper>

        <ChangingWords
          className="hidden p-4 text-t1-darkGray sm:mt-48 sm:flex "
          isSmall={true}
          words={['Scroll', 'Move Smoothly']}
        />

        <ChangingWords
          words={['software', 'agile', 'human', 'team']}
        ></ChangingWords>

        <div>
          <p className="text p-8 text-4xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text p-8 text-4xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text p-8 text-4xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text p-8 text-4xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </main>
      <Ticker theme={PAGE_THEME.light} />
      <ContentWrapper>
        <Footer />
      </ContentWrapper>
    </div>
  )
}

export default Home
