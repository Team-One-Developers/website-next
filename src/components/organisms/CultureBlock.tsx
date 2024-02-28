import { Image } from "../atoms/Image"
import { ImageDecoration } from "../atoms/ImageDecoration"
import { ImageMask } from "../atoms/ImageMask"
import Typography from "../atoms/Typography"
import { TwoColumnsSectionContainer } from "../layout/TwoColumnsSectionContainer"
import Icon from "../molecules/Icon"
import Tangled from "/public/images/optimized/t1d_kai_knoerzer_062_optimized.webp"
import Dog from "/public/images/optimized/t1d_kai_knoerzer_126_optimized.webp"

export const CultureBlock = () => {
    return (
        <>
            <TwoColumnsSectionContainer
                className="md:mt-14"
                left={
                    <>
                        <Typography variant="paragraph" className="text-white">
                            Dass es schwer ist, Tech-Talente für sich zu gewinnen ist kein Geheimnis mehr. Uns
                            beschäftigt daher eine Frage so intensiv wie kaum eine andere:
                        </Typography>
                        <Typography variant="h3" className="mt-4 text-white md:mt-0">
                            Was können wir als Tech-Unternehmen tun, um das attraktivste Arbeitsumfeld zu schaffen, das
                            wir selbst je gesehen haben?
                            <Icon name="cup" className="-mt-2 inline" />
                        </Typography>
                    </>
                }
                right={
                    <ImageDecoration
                        className="rotate-[-12.5deg]"
                        element={
                            <div className="">
                                <ImageMask>
                                    <Image
                                        src="/images/logo/t1d-sticker-neongreen.svg"
                                        alt="T1D Logo"
                                        width={125}
                                        height={23}
                                        style={{ backgroundColor: "black" }}
                                    />
                                </ImageMask>
                            </div>
                        }
                    >
                        <ImageMask className="aspect-[0.75] w-full">
                            <Image
                                src={Tangled}
                                alt="A person holding a computer mouse. The cable is heavily tangled up. The person looks surprised into the camera."
                                fill
                                placeholder="blur"
                            />
                        </ImageMask>
                    </ImageDecoration>
                }
                leftXLWidthClass="xl:w-[85%]"
                rightXLWidthClass="xl:w-[85%]"
                backgroundColorClass="bg-black"
            />
            <TwoColumnsSectionContainer
                className="mt-6"
                left={null}
                right={
                    <>
                        <div className="mb-8 flex w-full flex-row gap-4">
                            <Icon name="globe" className="mt-1 lg:mt-2 " />
                            <Typography
                                className="shrink grow basis-0 font-abcdiatype leading-150 text-white"
                                variant="h4"
                            >
                                Die wichtigsten Antworten auf diese Frage sind für uns: Werte zu definieren, Werte zu
                                leben und sie auch zu schützen. Dabei ehrlich und authentisch zu sein, nichts zu
                                versprechen was man nicht halten kann und vor allem nicht nur zu reden, sondern zu
                                machen.
                            </Typography>
                        </div>
                        <div className="mb-8 flex w-full flex-row gap-4">
                            <Icon name="person_small" className="mt-1 lg:mt-2" />
                            <Typography
                                className="shrink grow basis-0 font-abcdiatype leading-150 text-white"
                                variant="h4"
                            >
                                Und zu guter Letzt: Individuelle Rahmenbedingungen zu schaffen. Diese Antworten liefern
                                uns einen natürlichen Treibstoff, mit dem wir wachsen und gedeihen, der uns als Team gut
                                tut und zusammenhält und uns von jedem anderen Arbeitgeber unterscheidet.
                            </Typography>
                        </div>
                    </>
                }
                leftXLWidthClass="xl:w-[85%]"
                rightXLWidthClass="xl:w-[85%]"
                backgroundColorClass="bg-black"
            />

            <TwoColumnsSectionContainer
                className="pt-0"
                left={
                    <div className="relative aspect-[0.75] w-full">
                        <Image
                            src="/images/dancers/dancing-hearts.svg"
                            alt="moving hearts"
                            height={75}
                            width={75}
                            className="absolute bottom-0 z-30"
                        />
                        <ImageMask className="relative aspect-[0.75] size-full md:w-auto">
                            <Image src={Dog} alt="Man with a dog smiling at the camera" fill placeholder="blur" />
                        </ImageMask>
                    </div>
                }
                right={null}
                backgroundColorClass="bg-black"
                leftXLWidthClass="xl:w-[95%]"
            />

            <TwoColumnsSectionContainer
                className="md:mt-4"
                left={
                    <div className="mb-8 flex w-full flex-row gap-4">
                        <Icon name="humancentered" className="mt-1 lg:mt-2" />
                        <Typography className="shrink grow basis-0 font-abcdiatype leading-150 text-white" variant="h4">
                            Menschenzentriert zu arbeiten bedeutet für uns natürlich auch, kundenzentriert zu arbeiten.
                            Als Dienstleister, der wir sind, heißt das natürlich in allererster Linie, ein klares
                            Verständnis für unsere eigenen Kunden und deren Herausforderungen in der digitalen
                            Produktlandschaft zu schaffen, gemeinsam zu verstehen, wie Software zu einem zentralen
                            Werttreiber wird und wie man eine nachhaltige und hochperformante Umsetzung gewährleistet.
                        </Typography>
                    </div>
                }
                right={null}
                backgroundColorClass="bg-black"
                leftXLWidthClass="xl:w-[95%]"
            />
        </>
    )
}
