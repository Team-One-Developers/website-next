import Image from 'next/image'

import DancingHearts from '../../../../public/images/dancers/dancing-hearts.svg'
import CupIcon from '../../../../public/images/icons/cup.svg'
import HumanCentredIcon from '../../../../public/images/icons/humancentred.svg'
import PersonIcon from '../../../../public/images/icons/person-1.svg'
import WorldIcon from '../../../../public/images/icons/world-1.svg'
import T1DLogoDecoration from '../../../../public/images/logo/t1d-sticker-neongreen.svg'
import { ImageDecoration } from '../atoms/ImageDecoration'
import { ImageMask } from '../atoms/ImageMask'
import Typography from '../atoms/Typography'
import { TwoColumnsSectionContainer } from '../layout/TwoColumnsSectionContainer'

export const CultureBlock = () => {
  return (
    <>
      <TwoColumnsSectionContainer
        className="mt-14"
        left={
          <>
            <Typography variant="text_sm" className="text-t1-white">
              Dass es schwer ist, Tech-Talente für sich zu gewinnen ist kein
              Geheimnis mehr. Uns beschäftigt daher eine Frage so intensiv wie
              kaum eine andere:
            </Typography>
            <Typography variant="text_xl" className="text-t1-white">
              Was können wir als Tech-Unternehmen tun, um das attraktivste
              Arbeitsumfeld zu schaffen, das wir selbst je gesehen haben?
              <Image src={CupIcon} alt="Cup SVG" className="-mt-2 inline" />
            </Typography>
          </>
        }
        right={
          <ImageDecoration
            className="-rotate-[12.5deg]"
            element={
              <div className="relative ">
                <div className="absolute left-[15px] top-[20px] h-[85px] w-[70%] bg-t1-black" />
                <Image
                  src={T1DLogoDecoration}
                  alt="T1D Logo"
                  className="relative z-[2000]"
                />
              </div>
            }
          >
            <Image
              src="/images/cropped/struggling_jannik.webp"
              alt="A person holding a computer mouse. The cable is heavily tangled up. The person looks surprised into the camera."
              width={750}
              height={948}
            />
          </ImageDecoration>
        }
        leftXLWidthClass="xl:w-[85%]"
        rightXLWidthClass="xl:w-[85%]"
        backgroundColorClass="bg-t1-black"
      />
      <TwoColumnsSectionContainer
        className="mt-6"
        left={null}
        right={
          <>
            <div className="mb-8 grid w-full grid-cols-[0.1fr_1.9fr] gap-x-4 gap-y-0">
              <div className="box-border p-2">
                <Image src={WorldIcon} alt="World Globe Icon" className="" />
              </div>
              <Typography className="text-t1-white" variant="text_lg">
                Die wichtigsten Antworten auf diese Frage sind für uns: Werte zu
                definieren, Werte zu leben und sie auch zu schützen. Dabei
                ehrlich und authentisch zu sein, nichts zu versprechen was man
                nicht halten kann und vor allem nicht nur zu reden, sondern zu
                machen.
              </Typography>
            </div>
            <div className="mb-8 grid w-full grid-cols-[0.1fr_1.9fr] gap-x-4 gap-y-0">
              <div className="box-border p-2">
                <Image src={PersonIcon} alt="Person Icon" className="" />
              </div>
              <div>
                <Typography className="text-t1-white" variant="text_lg">
                  Und zu guter Letzt: Individuelle Rahmenbedingungen zu
                  schaffen. Diese Antworten liefern uns einen natürlichen
                  Treibstoff, mit dem wir wachsen und gedeihen, der uns als Team
                  gut tut und zusammenhält und uns von jedem anderen Arbeitgeber
                  unterscheidet.
                </Typography>
              </div>
            </div>
          </>
        }
        leftXLWidthClass="xl:w-[85%]"
        rightXLWidthClass="xl:w-[85%]"
        backgroundColorClass="bg-t1-black"
      />

      <TwoColumnsSectionContainer
        left={
          <div className="relative">
            <Image
              src={DancingHearts}
              alt="moving hearts"
              height={75}
              width={75}
              className="absolute bottom-0"
            />
            <ImageMask>
              <Image
                src="/images/t1d_kai_knoerzer_126.jpg"
                alt="Man with a dog"
                width={750}
                height={1125}
              />
            </ImageMask>
          </div>
        }
        right={null}
        backgroundColorClass="bg-t1-black"
        leftXLWidthClass="xl:w-[95%]"
      />

      <TwoColumnsSectionContainer
        className="mt-4"
        left={
          <div className="mb-8 grid w-full grid-cols-[0.1fr_1.9fr] gap-x-4 gap-y-0">
            <div className="box-border p-2">
              <Image src={HumanCentredIcon} alt="4 Personen Icon" />
            </div>
            <div>
              <Typography className="text-t1-white" variant="text_lg">
                Menschenzentriert zu arbeiten bedeutet für uns natürlich auch,
                kundenzentriert zu arbeiten. Als Dienstleister, der wir sind,
                heißt das natürlich in allererster Linie, ein klares Verständnis
                für unsere eigenen Kunden und deren Herausforderungen in der
                digitalen Produktlandschaft zu schaffen, gemeinsam zu verstehen,
                wie Software zu einem zentralen Werttreiber wird und wie man
                eine nachhaltige und hochperformante Umsetzung gewährleistet.
              </Typography>
            </div>
          </div>
        }
        right={null}
        backgroundColorClass="bg-t1-black"
        leftXLWidthClass="xl:w-[95%]"
      />
    </>
  )
}
