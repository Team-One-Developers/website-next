import { T1PortableText } from "@/components/T1PortableText"
import Typography from "@/components/atoms/Typography"
import { ResultBlogElement } from "@/components/molecules/BlogArticle"
import { formatDate } from "@/lib/formateDate"
import { QUERY_ALL_BLOGSResult, QUERY_SPECIFIC_BLOGResult } from "@/sanity/types"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export interface BlogDetails2Props {
    blog: QUERY_SPECIFIC_BLOGResult
    highlightedContent: any[]
    relatedBlogs: QUERY_ALL_BLOGSResult
}

const BlogDetails2 = async ({ blog, highlightedContent, relatedBlogs }: BlogDetails2Props) => {
    return (
        <>
            <section className="bg-background pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div className="relative z-20 mb-[60px] overflow-hidden rounded">
                                <Image
                                    src={blog?.heroImage?.asset?.url ?? ""}
                                    alt="Hero Image"
                                    width={blog?.heroImage?.asset?.metadata?.dimensions?.width ?? 0}
                                    height={blog?.heroImage?.asset?.metadata?.dimensions?.height ?? 0}
                                    className="lg:min-h-auto min-h-[250px] w-full object-cover"
                                />
                                <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-foreground/70 to-transparent">
                                    <div className="flex flex-wrap items-center p-5 pb-4 sm:p-8 sm:pb-4">
                                        <div className="mb-4 mr-5 flex items-center md:mr-10">
                                            <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                                                <Image
                                                    src={blog?.author?.profileImg?.asset?.url ?? ""}
                                                    alt="image"
                                                    width={
                                                        blog?.author?.profileImg?.asset?.metadata?.dimensions?.width ??
                                                        0
                                                    }
                                                    height={
                                                        blog?.author?.profileImg?.asset?.metadata?.dimensions?.height ??
                                                        0
                                                    }
                                                    className="w-full"
                                                />
                                            </div>

                                            <Typography as="p" variant="paragraph" className="text-background">
                                                By {blog?.author?.name}
                                            </Typography>
                                        </div>
                                        <div className="mb-4 flex items-center">
                                            <p className="mr-5 flex items-center text-sm font-medium text-background md:mr-8">
                                                <span className="mr-3">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14 2.6499H12.7V2.0999C12.7 1.7999 12.45 1.5249 12.125 1.5249C11.8 1.5249 11.55 1.7749 11.55 2.0999V2.6499H4.42505V2.0999C4.42505 1.7999 4.17505 1.5249 3.85005 1.5249C3.52505 1.5249 3.27505 1.7749 3.27505 2.0999V2.6499H2.00005C1.15005 2.6499 0.425049 3.3499 0.425049 4.2249V12.9249C0.425049 13.7749 1.12505 14.4999 2.00005 14.4999H14C14.85 14.4999 15.575 13.7999 15.575 12.9249V4.1999C15.575 3.3499 14.85 2.6499 14 2.6499ZM1.57505 7.2999H3.70005V9.7749H1.57505V7.2999ZM4.82505 7.2999H7.45005V9.7749H4.82505V7.2999ZM7.45005 10.8999V13.3499H4.82505V10.8999H7.45005ZM8.57505 10.8999H11.2V13.3499H8.57505V10.8999ZM8.57505 9.7749V7.2999H11.2V9.7749H8.57505ZM12.3 7.2999H14.425V9.7749H12.3V7.2999ZM2.00005 3.7749H3.30005V4.2999C3.30005 4.5999 3.55005 4.8749 3.87505 4.8749C4.20005 4.8749 4.45005 4.6249 4.45005 4.2999V3.7749H11.6V4.2999C11.6 4.5999 11.85 4.8749 12.175 4.8749C12.5 4.8749 12.75 4.6249 12.75 4.2999V3.7749H14C14.25 3.7749 14.45 3.9749 14.45 4.2249V6.1749H1.57505V4.2249C1.57505 3.9749 1.75005 3.7749 2.00005 3.7749ZM1.57505 12.8999V10.8749H3.70005V13.3249H2.00005C1.75005 13.3499 1.57505 13.1499 1.57505 12.8999ZM14 13.3499H12.3V10.8999H14.425V12.9249C14.45 13.1499 14.25 13.3499 14 13.3499Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                <Typography as="span" variant="paragraph">
                                                    {formatDate(blog?.date!)}
                                                </Typography>
                                            </p>

                                            {/* <p className="mr-5 flex items-center text-sm font-medium text-background md:mr-8">
                                                <span className="mr-3">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M11.1 4.875H4.64995C4.34995 4.875 4.07495 5.125 4.07495 5.45C4.07495 5.775 4.32495 6.025 4.64995 6.025H11.125C11.425 6.025 11.7 5.775 11.7 5.45C11.7 5.125 11.425 4.875 11.1 4.875Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M9.79995 7.92505H4.64995C4.34995 7.92505 4.07495 8.17505 4.07495 8.50005C4.07495 8.82505 4.32495 9.07505 4.64995 9.07505H9.79995C10.1 9.07505 10.375 8.82505 10.375 8.50005C10.375 8.17505 10.1 7.92505 9.79995 7.92505Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M14 1.9751H2.00005C1.15005 1.9751 0.425049 2.6751 0.425049 3.5501V12.9751C0.425049 13.3751 0.650049 13.7501 1.02505 13.9251C1.17505 14.0001 1.32505 14.0251 1.47505 14.0251C1.72505 14.0251 1.95005 13.9501 2.15005 13.7751L4.27505 12.0251H14C14.85 12.0251 15.575 11.3251 15.575 10.4501V3.5501C15.575 2.6751 14.85 1.9751 14 1.9751ZM14.45 10.4501C14.45 10.7001 14.25 10.9001 14 10.9001H4.07505C3.95005 10.9001 3.82505 10.9501 3.72505 11.0251L1.57505 12.8001V3.5501C1.57505 3.3001 1.77505 3.1001 2.02505 3.1001H14.025C14.275 3.1001 14.475 3.3001 14.475 3.5501V10.4501H14.45Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                <span>05</span>
                                            </p>
                                            <p className="flex items-center text-sm font-medium text-background">
                                                <span className="mr-3">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M8.00005 5.92505C6.85005 5.92505 5.92505 6.85005 5.92505 8.00005C5.92505 9.15005 6.85005 10.075 8.00005 10.075C9.15005 10.075 10.075 9.15005 10.075 8.00005C10.075 6.85005 9.15005 5.92505 8.00005 5.92505ZM8.00005 8.95005C7.47505 8.95005 7.05005 8.52505 7.05005 8.00005C7.05005 7.47505 7.47505 7.05005 8.00005 7.05005C8.52505 7.05005 8.95005 7.47505 8.95005 8.00005C8.95005 8.52505 8.52505 8.95005 8.00005 8.95005Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.3 7.1251C13.875 5.0001 11.9 2.8501 8 2.8501C4.1 2.8501 2.125 5.0001 0.7 7.1251C0.35 7.6501 0.35 8.3501 0.7 8.8751C2.125 10.9751 4.1 13.1501 8 13.1501C11.9 13.1501 13.875 10.9751 15.3 8.8751C15.65 8.3251 15.65 7.6501 15.3 7.1251ZM14.375 8.2501C12.55 10.9251 10.725 12.0251 8 12.0251C5.275 12.0251 3.45 10.9251 1.625 8.2501C1.525 8.1001 1.525 7.9001 1.625 7.7501C3.45 5.0751 5.275 3.9751 8 3.9751C10.725 3.9751 12.55 5.0751 14.375 7.7501C14.45 7.9001 14.45 8.1001 14.375 8.2501Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                <span>05</span>
                                            </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4 lg:w-8/12">
                                    <div>
                                        <Typography as="h1" variant="h1" className="g mb-6 text-foreground">
                                            {blog?.title}
                                        </Typography>
                                        {blog?.content && <T1PortableText value={highlightedContent} />}

                                        {/* <div className="relative z-10 mb-10 overflow-hidden rounded bg-primary/5 p-10 text-center md:px-[60px]">
                                            <div className="mx-auto max-w-[530px]">
                                                <span className="mb-6 flex justify-center text-primary">
                                                    <svg
                                                        width="44"
                                                        height="26"
                                                        viewBox="0 0 44 26"
                                                        className="fill-current"
                                                    >
                                                        <path d="M10.1101 0.00124908C5.46698 -0.0701833 1.25247 2.92998 0.252417 7.00162C-0.319041 9.50175 0.180985 12.0019 1.68106 14.002C3.25258 16.145 5.68128 17.5022 8.39571 17.8593L10.8958 24.0025C11.1816 24.6454 11.8245 25.074 12.5388 25.074C13.2531 25.074 13.896 24.6454 14.1817 24.0025C14.6103 22.931 15.1103 21.7881 15.6104 20.7166C16.8247 18.0022 18.0391 15.2163 18.9677 12.359C19.9677 9.35889 19.5392 6.14443 17.8248 3.71573C16.1104 1.35846 13.396 0.0726814 10.1101 0.00124908ZM16.6104 11.6447C15.6818 14.3592 14.4675 17.145 13.3245 19.788C13.1102 20.3595 12.8245 20.8595 12.6102 21.431L10.1815 15.5735L9.39576 15.5021C7.10992 15.3592 4.96695 14.2163 3.7526 12.5733C2.68112 11.1447 2.32396 9.35889 2.75255 7.64451C3.46687 4.71579 6.53846 2.57281 10.0386 2.57281H10.1101C12.5388 2.57281 14.5389 3.57287 15.8247 5.28724C17.039 7.00162 17.3247 9.43032 16.6104 11.6447Z" />
                                                        <path d="M42.3267 3.78726C40.6124 1.35856 37.8979 0.00134277 34.612 0.00134277C34.5406 0.00134277 34.5406 0.00134277 34.4692 0.00134277C29.8975 0.00134277 25.7544 3.0015 24.7544 7.00171C24.1829 9.50185 24.6829 12.002 26.183 14.0735C27.7545 16.2165 30.1832 17.5737 32.8977 17.9309L35.3978 24.074C35.6835 24.7169 36.3264 25.1455 37.0407 25.1455C37.7551 25.1455 38.398 24.7169 38.6837 24.074C39.1123 23.0026 39.6123 21.8596 40.1123 20.7882C41.3267 18.0737 42.541 15.2879 43.4696 12.4306C44.4697 9.50184 44.0411 6.21596 42.3267 3.78726ZM41.1124 11.6448C40.1838 14.3592 38.9694 17.1451 37.8265 19.7881C37.6122 20.3596 37.3265 20.8596 37.1122 21.431L34.6835 15.5736L33.8977 15.5022C31.6119 15.3593 29.4689 14.2164 28.2546 12.5734C27.1831 11.1448 26.8259 9.35898 27.2545 7.57317C27.9688 4.64445 31.0404 2.50147 34.5406 2.50147H34.612C37.0407 2.50147 39.0408 3.50153 40.3266 5.2159C41.541 7.00171 41.8267 9.43041 41.1124 11.6448Z" />
                                                    </svg>
                                                </span>
                                                <p className="mb-4 text-base font-medium italic leading-[26px] text-foreground">
                                                    A spring of truth shall flow from it: like a new star it shall
                                                    scatter the darkness of ignorance, and cause a light heretofore
                                                    unknown to shine amongst men.
                                                </p>
                                                <span className="text-body-color text-sm italic">“Andrio Domeco”</span>
                                            </div>
                                            <div>
                                                <span className="absolute left-0 top-0 -z-10">
                                                    <svg
                                                        width="103"
                                                        height="109"
                                                        viewBox="0 0 103 109"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <ellipse
                                                            cx="0.483916"
                                                            cy="3.5"
                                                            rx="102.075"
                                                            ry="105.5"
                                                            transform="rotate(180 0.483916 3.5)"
                                                            fill="url(#paint0_linear)"
                                                        />
                                                        <defs>
                                                            <linearGradient
                                                                id="paint0_linear"
                                                                x1="-101.591"
                                                                y1="-50.4346"
                                                                x2="49.1618"
                                                                y2="-49.6518"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#3056D3" stopOpacity="0.15" />
                                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <span className="absolute bottom-0 right-0 -z-10">
                                                    <svg
                                                        width="102"
                                                        height="106"
                                                        viewBox="0 0 102 106"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M204.558 105.5C204.558 163.766 158.858 211 102.484 211C46.1095 211 0.409152 163.766 0.409162 105.5C0.409172 47.234 46.1096 8.25865e-06 102.484 1.84462e-05C158.858 2.86338e-05 204.559 47.234 204.558 105.5Z"
                                                            fill="url(#paint0_linear_1179_3)"
                                                        />
                                                        <defs>
                                                            <linearGradient
                                                                id="paint0_linear_1179_3"
                                                                x1="0.40917"
                                                                y1="51.5654"
                                                                x2="151.162"
                                                                y2="52.3482"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#3056D3" stopOpacity="0.15" />
                                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div> */}

                                        {/* <h3 className="mb-8 text-2xl font-bold text-foreground sm:text-[26px]">
                                            What is it with your ideas?
                                        </h3>
                                        <p className="text-body-color mb-8 text-base leading-relaxed">
                                            At quo cetero fastidii. Usu ex ornatus corpora sententiae, vocibus deleniti
                                            ut nec. Ut enim eripuit eligendi est, in iracundia signiferumque quo. Sed
                                            virtute suavitate suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                                            adversarium interpretaris eu sit, eum viris impedit ne. Erant appareat
                                            corrumpit ei vel.
                                        </p>
                                        <p className="text-body-color mb-11 text-base leading-relaxed">
                                            At quo cetero fastidii. Usu ex ornatus corpora sententiae, vocibus deleniti
                                            ut nec. Ut enim eripuit eligendi est, in iracundia signiferumque quo. Sed
                                            virtute suavitate suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                                            adversarium interpretaris eu sit, eum viris impedit ne. Erant appareat
                                            corrumpit ei vel.
                                        </p> */}

                                        <div className="-mx-4 mb-12 flex flex-wrap items-center">
                                            <div className="w-full px-4 md:w-1/2">
                                                <div className="mb-8 flex flex-wrap items-center md:mb-0">
                                                    {blog?.tags?.map((tag, index) => (
                                                        <MetaTagItem key={index} name={tag} />
                                                    ))}
                                                </div>
                                            </div>

                                            {
                                                // TODO which social media to use?
                                                // TODO add actual share buttons
                                            }

                                            <div className="w-full px-4 md:w-1/2">
                                                <div className="flex items-center md:justify-end">
                                                    <span className="text-body-color mr-5 text-sm font-medium">
                                                        Share This Post
                                                    </span>
                                                    <div className="flex items-center gap-x-4 gap-y-2">
                                                        <SocialLinkItem link="#">
                                                            <svg
                                                                width="32"
                                                                height="32"
                                                                viewBox="0 0 32 32"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                                                                    fill="#4064AC"
                                                                ></path>
                                                                <path
                                                                    d="M19.439 14.4H18.1992H17.7564V13.8839V12.2839V11.7677H18.1992H19.1291C19.3726 11.7677 19.5719 11.5613 19.5719 11.2516V8.51613C19.5719 8.23226 19.3947 8 19.1291 8H17.5128C15.7638 8 14.5461 9.44516 14.5461 11.5871V13.8323V14.3484H14.1033H12.5978C12.2878 14.3484 12 14.6323 12 15.0452V16.9032C12 17.2645 12.2435 17.6 12.5978 17.6H14.059H14.5018V18.1161V23.3032C14.5018 23.6645 14.7454 24 15.0996 24H17.1807C17.3136 24 17.4243 23.9226 17.5128 23.8194C17.6014 23.7161 17.6678 23.5355 17.6678 23.3806V18.1419V17.6258H18.1328H19.1291C19.4169 17.6258 19.6383 17.4194 19.6826 17.1097V17.0839V17.0581L19.9925 15.2774C20.0147 15.0968 19.9925 14.8903 19.8597 14.6839C19.8154 14.5548 19.6161 14.4258 19.439 14.4Z"
                                                                    fill="white"
                                                                ></path>
                                                            </svg>
                                                        </SocialLinkItem>
                                                        <SocialLinkItem link="#">
                                                            <svg
                                                                width="32"
                                                                height="33"
                                                                viewBox="0 0 32 33"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M32 16.7347C32 25.5713 24.8366 32.7347 16 32.7347C7.16344 32.7347 0 25.5713 0 16.7347C0 7.89818 7.16344 0.734741 16 0.734741C24.8366 0.734741 32 7.89818 32 16.7347ZM23.6036 12.8349C24.3771 12.7431 25.1147 12.5375 25.8004 12.2334C25.2878 13.0004 24.6395 13.6738 23.8917 14.2128C23.8991 14.3765 23.9028 14.5417 23.9028 14.7074C23.9028 19.7617 20.0558 25.5892 13.0213 25.5892C10.8616 25.5892 8.85088 24.9563 7.15927 23.8708C7.45789 23.9064 7.76307 23.9244 8.07111 23.9244C9.8634 23.9244 11.5122 23.3132 12.8214 22.2873C11.1474 22.2562 9.73534 21.1504 9.24876 19.6313C9.48206 19.6758 9.72136 19.6995 9.96836 19.6995C10.3166 19.6995 10.6552 19.653 10.9757 19.5652C9.22651 19.2141 7.90768 17.6685 7.90768 15.8154C7.90768 15.7995 7.90768 15.7832 7.90796 15.767C8.42335 16.0542 9.01346 16.2262 9.64007 16.2458C8.61444 15.5602 7.93876 14.3891 7.93876 13.0625C7.93876 12.3618 8.12758 11.7044 8.45672 11.1396C10.3431 13.4541 13.1613 14.9766 16.3398 15.1361C16.2742 14.856 16.2402 14.5642 16.2402 14.2644C16.2402 12.1527 17.953 10.44 20.0647 10.44C21.1653 10.44 22.1593 10.9043 22.8569 11.6473C23.7277 11.4759 24.5466 11.1579 25.2856 10.7195C24.9995 11.6131 24.3934 12.3618 23.6036 12.8349Z"
                                                                    fill="#55ACEE"
                                                                ></path>
                                                            </svg>
                                                        </SocialLinkItem>
                                                        <SocialLinkItem link="#">
                                                            <svg
                                                                width="33"
                                                                height="32"
                                                                viewBox="0 0 33 32"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M32.7861 16C32.7861 24.8366 25.6227 32 16.7861 32C7.94958 32 0.786133 24.8366 0.786133 16C0.786133 7.16344 7.94958 0 16.7861 0C25.6227 0 32.7861 7.16344 32.7861 16ZM8.50669 8.82376C8.50669 7.69545 9.36262 6.83666 10.6709 6.83666C11.9795 6.83666 12.7835 7.69545 12.8089 8.82376C12.8089 9.92811 11.9795 10.8117 10.6455 10.8117H10.6207C9.33781 10.8117 8.50669 9.92811 8.50669 8.82376ZM26.3457 23.884V17.2875C26.3457 13.7551 24.4593 12.1112 21.9431 12.1112C19.9109 12.1112 19.0045 13.2292 18.4963 14.0113V12.3813H14.6712C14.7226 13.4602 14.6712 23.8837 14.6712 23.8837H18.496V17.4595C18.496 17.1147 18.5219 16.7733 18.6226 16.5274C18.8998 15.8395 19.5276 15.129 20.5843 15.129C21.969 15.129 22.5212 16.1843 22.5212 17.7296V23.884H26.3457ZM18.4963 14.0113V14.0489H18.4709C18.4745 14.0424 18.4793 14.0358 18.4841 14.0292L18.4841 14.0291C18.4883 14.0232 18.4926 14.0173 18.4963 14.0113ZM8.73421 23.8839H12.5575V12.3812H8.73421V23.8839Z"
                                                                    fill="#007AB9"
                                                                ></path>
                                                            </svg>
                                                        </SocialLinkItem>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    // TODO german?
                                }
                                <div className="w-full px-4 lg:w-4/12">
                                    <div>
                                        <div className="relative mb-12 overflow-hidden rounded bg-primary-foreground px-11 py-[60px] text-center lg:px-8">
                                            <Typography as="h2" variant="h3" className="mb-2 text-background">
                                                Join our newsletter!
                                            </Typography>
                                            <Typography as="p" variant="paragraph" className="mb-8 text-background">
                                                Enter your email to receive our latest newsletter.
                                            </Typography>
                                            <form>
                                                <input
                                                    type="email"
                                                    placeholder="Your email address"
                                                    className="mb-4 w-full rounded border border-transparent bg-background bg-opacity-20 p-3 text-center text-sm font-medium text-foreground placeholder-foreground/30 outline-none focus:border-background focus-visible:shadow-none"
                                                />
                                                <input
                                                    type="submit"
                                                    value="Subscribe Now"
                                                    className="mb-6 w-full cursor-pointer rounded bg-[#13C296] p-3 text-center text-sm font-medium text-background transition hover:bg-opacity-90"
                                                />
                                            </form>
                                            <Typography as="p" variant="paragraph" className="text-background">
                                                Don&apos;t worry, we don&apos;t spam
                                            </Typography>
                                            <div>
                                                <span className="absolute right-0 top-0">
                                                    <svg
                                                        width="46"
                                                        height="46"
                                                        viewBox="0 0 46 46"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="1.39737"
                                                            cy="44.6026"
                                                            r="1.39737"
                                                            transform="rotate(-90 1.39737 44.6026)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="1.39737"
                                                            cy="7.9913"
                                                            r="1.39737"
                                                            transform="rotate(-90 1.39737 7.9913)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="13.6943"
                                                            cy="44.6026"
                                                            r="1.39737"
                                                            transform="rotate(-90 13.6943 44.6026)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="13.6943"
                                                            cy="7.9913"
                                                            r="1.39737"
                                                            transform="rotate(-90 13.6943 7.9913)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="25.9911"
                                                            cy="44.6026"
                                                            r="1.39737"
                                                            transform="rotate(-90 25.9911 44.6026)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="25.9911"
                                                            cy="7.9913"
                                                            r="1.39737"
                                                            transform="rotate(-90 25.9911 7.9913)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="38.288"
                                                            cy="44.6026"
                                                            r="1.39737"
                                                            transform="rotate(-90 38.288 44.6026)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="38.288"
                                                            cy="7.9913"
                                                            r="1.39737"
                                                            transform="rotate(-90 38.288 7.9913)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="1.39737"
                                                            cy="32.3058"
                                                            r="1.39737"
                                                            transform="rotate(-90 1.39737 32.3058)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="13.6943"
                                                            cy="32.3058"
                                                            r="1.39737"
                                                            transform="rotate(-90 13.6943 32.3058)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="25.9911"
                                                            cy="32.3058"
                                                            r="1.39737"
                                                            transform="rotate(-90 25.9911 32.3058)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="38.288"
                                                            cy="32.3058"
                                                            r="1.39737"
                                                            transform="rotate(-90 38.288 32.3058)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="1.39737"
                                                            cy="20.0086"
                                                            r="1.39737"
                                                            transform="rotate(-90 1.39737 20.0086)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="13.6943"
                                                            cy="20.0086"
                                                            r="1.39737"
                                                            transform="rotate(-90 13.6943 20.0086)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="25.9911"
                                                            cy="20.0086"
                                                            r="1.39737"
                                                            transform="rotate(-90 25.9911 20.0086)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="38.288"
                                                            cy="20.0086"
                                                            r="1.39737"
                                                            transform="rotate(-90 38.288 20.0086)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="absolute bottom-0 left-0">
                                                    <svg
                                                        width="46"
                                                        height="46"
                                                        viewBox="0 0 46 46"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="1.39737"
                                                            cy="44.6026"
                                                            r="1.39737"
                                                            transform="rotate(-90 1.39737 44.6026)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="1.39737"
                                                            cy="7.9913"
                                                            r="1.39737"
                                                            transform="rotate(-90 1.39737 7.9913)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="13.6943"
                                                            cy="44.6026"
                                                            r="1.39737"
                                                            transform="rotate(-90 13.6943 44.6026)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="13.6943"
                                                            cy="7.9913"
                                                            r="1.39737"
                                                            transform="rotate(-90 13.6943 7.9913)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="25.9911"
                                                            cy="44.6026"
                                                            r="1.39737"
                                                            transform="rotate(-90 25.9911 44.6026)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="25.9911"
                                                            cy="7.9913"
                                                            r="1.39737"
                                                            transform="rotate(-90 25.9911 7.9913)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="38.288"
                                                            cy="44.6026"
                                                            r="1.39737"
                                                            transform="rotate(-90 38.288 44.6026)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="38.288"
                                                            cy="7.9913"
                                                            r="1.39737"
                                                            transform="rotate(-90 38.288 7.9913)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="1.39737"
                                                            cy="32.3058"
                                                            r="1.39737"
                                                            transform="rotate(-90 1.39737 32.3058)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="13.6943"
                                                            cy="32.3058"
                                                            r="1.39737"
                                                            transform="rotate(-90 13.6943 32.3058)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="25.9911"
                                                            cy="32.3058"
                                                            r="1.39737"
                                                            transform="rotate(-90 25.9911 32.3058)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="38.288"
                                                            cy="32.3058"
                                                            r="1.39737"
                                                            transform="rotate(-90 38.288 32.3058)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="1.39737"
                                                            cy="20.0086"
                                                            r="1.39737"
                                                            transform="rotate(-90 1.39737 20.0086)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="13.6943"
                                                            cy="20.0086"
                                                            r="1.39737"
                                                            transform="rotate(-90 13.6943 20.0086)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="25.9911"
                                                            cy="20.0086"
                                                            r="1.39737"
                                                            transform="rotate(-90 25.9911 20.0086)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                        <circle
                                                            cx="38.288"
                                                            cy="20.0086"
                                                            r="1.39737"
                                                            transform="rotate(-90 38.288 20.0086)"
                                                            fill="white"
                                                            fillOpacity="0.44"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="-mx-4 mb-8 flex flex-wrap">
                                            <div className="w-full px-4">
                                                <Typography as="h3" variant="h3" className="pb-5">
                                                    Beliebte Beiträge
                                                </Typography>
                                                <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                                            </div>

                                            {relatedBlogs.map((blog, index) => (
                                                <PopularArticleItem
                                                    key={index}
                                                    title={blog?.title ?? ""}
                                                    authorName={blog.author?.name ?? ""}
                                                    href={blog.path ?? ""}
                                                    image={blog.heroImage}
                                                />
                                            ))}
                                        </div>

                                        {/* <div className="mb-12 overflow-hidden rounded">
                                            <img
                                                src="https://i.ibb.co/bbjDccf/bannder-ad.jpg"
                                                alt="image"
                                                className="w-full"
                                            />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                        <div className="mt-14 w-full px-4">
                            <Typography as="h3" variant="h3" className="pb-5">
                                Verwandte Beiträge
                            </Typography>
                            <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                        </div>
                        {relatedBlogs.map((blog, index) => (
                            <RelatedArticleItem
                                key={index}
                                image={blog.heroImage}
                                date={formatDate(blog.date!)}
                                title={blog.title ?? ""}
                                description={blog.descriptionLong ?? ""}
                                href={blog.path ?? ""}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails2

const PopularArticleItem = ({
    image,
    href,
    title,
    authorName
}: {
    image: ResultBlogElement["heroImage"]
    href: string
    title: string
    authorName: string
}) => {
    return (
        <Link href={href} className="w-full rounded px-4 pt-5 hover:bg-foreground/5 md:w-1/2 lg:w-full">
            <div className="border-stroke flex w-full items-center border-b pb-5">
                <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full">
                    <Image
                        src={image?.asset?.url ?? "/images/optimized/hero_optimized.webp"}
                        alt="image"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="w-full">
                    <Typography as="p" variant="paragraph" className="mb-1 font-bold">
                        {title}
                    </Typography>
                    <Typography as="p" variant="paragraph" className="text-foreground">
                        {authorName}
                    </Typography>
                </div>
            </div>
        </Link>
    )
}

const RelatedArticleItem = ({
    image,
    date,
    title,
    description,
    href
}: {
    image: ResultBlogElement["heroImage"]
    date: string
    title: string
    description: string
    href: string
}) => {
    return (
        <Link href={href} className="w-full rounded px-4 pt-4 hover:bg-foreground/5 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full">
                <div className="mb-8 overflow-hidden rounded">
                    <Image
                        width={200}
                        height={100}
                        src={image?.asset?.url ?? "/images/optimized/hero_optimized.webp"}
                        alt="image"
                        className="h-64 w-full object-cover object-center"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="mb-5 inline-block w-fit rounded bg-t1-darkGreen px-4 py-1 text-center text-xs font-semibold leading-loose text-background">
                        {date}
                    </span>
                    <Typography as="h4" variant="h4" className="mb-4 inline-block">
                        {title}
                    </Typography>
                    <Typography as="p" variant="paragraph">
                        {description}
                    </Typography>
                </div>
            </div>
        </Link>
    )
}

const MetaTagItem = ({ name }: { name: string }) => {
    return (
        <p className="mb-2 mr-2 block rounded bg-foreground px-5 py-2 text-xs font-medium text-primary md:mr-4 lg:mr-2 xl:mr-4">
            {name}
        </p>
    )
}

const SocialLinkItem = ({ link, children }: { link: string; children: ReactNode }) => {
    return <Link href={link}>{children}</Link>
}
