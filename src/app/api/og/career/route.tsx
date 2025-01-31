/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get("title") || "Team One Developers"

    const fontData = await fetch(new URL("../../../../fonts/SpaceGrotesk-Regular.ttf", import.meta.url)).then((res) =>
        res.arrayBuffer()
    )

    const bgImage = await fetch(new URL("../../../../../public/images/ogbg.png", import.meta.url)).then((res) =>
        res.arrayBuffer()
    )

    // const Blob = () => {
    //     return (
    //         <svg width="538" height="538" viewBox="0 0 467 538" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <g filter="url(#filter0_d_111_8872)">
    //                 <path
    //                     fillRule="evenodd"
    //                     clipRule="evenodd"
    //                     d="M464.422 525.088C480.99 525.088 494.422 511.657 494.422 495.088L494.422 242.51C494.422 225.942 480.99 212.51 464.422 212.51L415.746 212.51C399.177 212.51 385.746 199.079 385.746 182.51L385.746 42.374C385.746 25.8054 372.314 12.374 355.746 12.374L208.078 12.374C191.509 12.374 178.078 25.8055 178.078 42.374L178.078 59.846C178.078 76.4146 164.646 89.846 148.078 89.846L74.1159 89.846C57.5474 89.846 44.1159 103.277 44.1159 119.846L44.1159 329.384C44.1159 345.953 57.5473 359.384 74.1159 359.384L151.844 359.384C168.412 359.384 181.844 372.815 181.844 389.384L181.844 495.088C181.844 511.657 195.275 525.088 211.844 525.088L464.422 525.088Z"
    //                     fill="#46FFAD"
    //                 />
    //             </g>
    //             <defs>
    //                 <filter
    //                     id="filter0_d_111_8872"
    //                     x="-4"
    //                     y="0"
    //                     width="546"
    //                     height="546"
    //                     filterUnits="userSpaceOnUse"
    //                     color-interpolation-filters="sRGB"
    //                 >
    //                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //                     <feColorMatrix
    //                         in="SourceAlpha"
    //                         type="matrix"
    //                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //                         result="hardAlpha"
    //                     />
    //                     <feOffset dy="4" />
    //                     <feGaussianBlur stdDeviation="2" />
    //                     <feComposite in2="hardAlpha" operator="out" />
    //                     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
    //                     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_111_8872" />
    //                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_111_8872" result="shape" />
    //                 </filter>
    //             </defs>
    //         </svg>
    //     )
    // }

    const Logo = () => {
        return (
            <svg
                width="135"
                height="46"
                xmlns="http://www.w3.org/2000/svg"
                id="v3_reconstruct_merged"
                viewBox="42.67 210.87 509.95 173.53"
            >
                <g>
                    <path d="M239.75,318.35h-1.15c-.53-.96-1.3-1.88-2.3-2.77-1.01-.89-2.29-1.62-3.85-2.2-1.56-.58-3.49-.86-5.8-.86-2.98,0-5.71,.72-8.21,2.16-2.5,1.44-4.49,3.53-5.98,6.26-1.49,2.74-2.23,6-2.23,9.79v1.08c0,3.84,.76,7.12,2.27,9.83,1.51,2.71,3.52,4.79,6.01,6.23,2.5,1.44,5.21,2.16,8.14,2.16,3.46,0,6.11-.62,7.96-1.87,1.85-1.25,3.23-2.64,4.14-4.18h1.15v5.04h7.27v-45.46h-7.42v14.79Zm.07,13.25c0,3.84-1.04,6.79-3.13,8.86-2.09,2.06-4.74,3.1-7.96,3.1s-5.8-1.03-7.88-3.1c-2.09-2.06-3.13-5.01-3.13-8.86v-.65c0-3.79,1.04-6.72,3.13-8.78,2.09-2.06,4.72-3.1,7.88-3.1s5.93,1.03,7.99,3.1c2.06,2.06,3.1,4.99,3.1,8.78v.65Z" />
                    <path d="M278.95,314.79c-2.57-1.51-5.56-2.27-8.96-2.27s-6.59,.76-9.25,2.27c-2.66,1.51-4.74,3.65-6.23,6.41-1.49,2.76-2.23,5.99-2.23,9.68v.86c0,3.65,.76,6.85,2.27,9.61,1.51,2.76,3.61,4.9,6.3,6.41,2.69,1.51,5.83,2.27,9.43,2.27,3.21,0,5.86-.5,7.92-1.51,2.06-1.01,3.73-2.26,5-3.74,1.27-1.49,2.24-2.9,2.92-4.25l-6.12-3.17c-.77,1.63-1.86,3.07-3.28,4.32-1.42,1.25-3.52,1.87-6.3,1.87-2.98,0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3Zm-19.04,12.85c.38-2.69,1.45-4.79,3.2-6.3,1.75-1.51,4.02-2.27,6.8-2.27s5.04,.76,6.77,2.27c1.73,1.51,2.69,3.61,2.88,6.3h-19.66Z" />
                    <polygon points="306.64 343.55 305.48 343.55 296.05 313.53 288.2 313.53 300.15 349.02 311.96 349.02 323.92 313.53 316.07 313.53 306.64 343.55" />
                    <path d="M351.24,314.79c-2.57-1.51-5.56-2.27-8.96-2.27s-6.59,.76-9.25,2.27c-2.66,1.51-4.74,3.65-6.23,6.41-1.49,2.76-2.23,5.99-2.23,9.68v.86c0,3.65,.76,6.85,2.27,9.61,1.51,2.76,3.61,4.9,6.3,6.41,2.69,1.51,5.83,2.27,9.43,2.27,3.21,0,5.86-.5,7.92-1.51,2.06-1.01,3.73-2.26,5-3.74,1.27-1.49,2.24-2.9,2.92-4.25l-6.12-3.17c-.77,1.63-1.86,3.07-3.28,4.32-1.42,1.25-3.52,1.87-6.3,1.87-2.98,0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3Zm-19.04,12.85c.38-2.69,1.45-4.79,3.2-6.3,1.75-1.51,4.02-2.27,6.8-2.27s5.04,.76,6.77,2.27c1.73,1.51,2.69,3.61,2.88,6.3h-19.66Z" />
                    <rect x="364.88" y="303.57" width="7.42" height="45.45" />
                    <path d="M405.92,314.75c-2.79-1.49-5.95-2.23-9.5-2.23s-6.71,.75-9.47,2.23c-2.76,1.49-4.93,3.59-6.52,6.3s-2.38,5.94-2.38,9.68v1.08c0,3.74,.79,6.98,2.38,9.72,1.58,2.74,3.75,4.84,6.52,6.3,2.76,1.46,5.92,2.2,9.47,2.2s6.72-.73,9.5-2.2c2.78-1.46,4.97-3.56,6.55-6.3,1.58-2.74,2.38-5.98,2.38-9.72v-1.08c0-3.74-.79-6.97-2.38-9.68s-3.77-4.81-6.55-6.3Zm1.51,16.85c0,3.7-1.02,6.59-3.06,8.68s-4.69,3.13-7.96,3.13-5.84-1.04-7.88-3.13-3.06-4.98-3.06-8.68v-.65c0-3.7,1.02-6.59,3.06-8.68s4.67-3.13,7.88-3.13,5.98,1.04,7.99,3.13c2.02,2.09,3.02,4.98,3.02,8.68v.65Z" />
                    <path d="M449.23,314.68c-2.47-1.44-5.2-2.16-8.17-2.16-3.46,0-6.11,.62-7.96,1.87-1.85,1.25-3.23,2.66-4.14,4.25h-1.15v-5.11h-7.27v47.51h7.42v-16.84h1.15c.58,.96,1.34,1.88,2.3,2.77,.96,.89,2.23,1.62,3.82,2.2,1.58,.58,3.53,.86,5.83,.86,2.98,0,5.71-.72,8.21-2.16,2.5-1.44,4.49-3.52,5.98-6.23,1.49-2.71,2.23-5.99,2.23-9.83v-1.08c0-3.84-.76-7.12-2.27-9.83-1.51-2.71-3.5-4.79-5.98-6.23Zm.76,16.92c0,3.84-1.03,6.79-3.1,8.86-2.06,2.06-4.73,3.1-7.99,3.1s-5.8-1.03-7.88-3.1c-2.09-2.06-3.13-5.01-3.13-8.86v-.65c0-3.79,1.04-6.72,3.13-8.78,2.09-2.06,4.72-3.1,7.88-3.1s5.87,1.03,7.96,3.1c2.09,2.06,3.13,4.99,3.13,8.78v.65Z" />
                    <path d="M220.75,295.96h11.1v-6.26h-8.73c-1.34,0-2.02-.72-2.02-2.16v-20.81h10.58v-6.26h-10.58v-8.57h-3.07l-4.35,6.52v30.42c0,2.16,.64,3.89,1.91,5.18s2.99,1.94,5.15,1.94Z" />
                    <path d="M244.3,294.71c2.69,1.51,5.83,2.27,9.43,2.27,3.21,0,5.86-.5,7.92-1.51,2.06-1.01,3.73-2.26,5-3.74,1.27-1.49,2.24-2.9,2.92-4.25l-6.12-3.17c-.77,1.63-1.86,3.07-3.28,4.32-1.42,1.25-3.52,1.87-6.3,1.87-2.98,0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3-2.57-1.51-5.56-2.27-8.96-2.27s-6.59,.76-9.25,2.27c-2.66,1.51-4.74,3.65-6.23,6.41-1.49,2.76-2.23,5.99-2.23,9.68v.86c0,3.65,.76,6.85,2.27,9.61,1.51,2.76,3.61,4.9,6.3,6.41Zm2.27-26.42c1.75-1.51,4.02-2.27,6.8-2.27s5.04,.76,6.77,2.27c1.73,1.51,2.69,3.61,2.88,6.3h-19.66c.38-2.69,1.45-4.79,3.2-6.3Z" />
                    <path d="M296.45,293.45c.77-.96,1.34-1.8,1.73-2.52h1.08v.22c0,1.49,.53,2.66,1.58,3.53,1.06,.86,2.42,1.3,4.1,1.3h4.76v-6.19h-2.25c-1.34,0-2.02-.72-2.02-2.16v-14.62c0-4.32-1.32-7.66-3.96-10.01-2.64-2.35-6.26-3.53-10.87-3.53-2.98,0-5.52,.48-7.63,1.44-2.11,.96-3.8,2.22-5.08,3.78-1.27,1.56-2.2,3.3-2.77,5.22l6.91,2.23c.43-1.92,1.32-3.48,2.66-4.68,1.34-1.2,3.29-1.8,5.83-1.8s4.51,.62,5.76,1.87c1.25,1.25,1.87,2.91,1.87,4.97v2.3h-10.8c-2.59,0-4.91,.41-6.95,1.22-2.04,.82-3.65,2.03-4.82,3.64-1.18,1.61-1.76,3.64-1.76,6.08s.59,4.44,1.76,6.12c1.18,1.68,2.76,2.95,4.75,3.82,1.99,.86,4.26,1.3,6.8,1.3s4.42-.35,5.9-1.04c1.49-.7,2.62-1.52,3.38-2.48Zm-13.32-4.03c-1.25-.96-1.87-2.26-1.87-3.89s.6-2.87,1.8-3.71c1.2-.84,2.78-1.26,4.75-1.26h10.37v.72c0,2.98-.91,5.32-2.74,7.02-1.82,1.7-4.22,2.56-7.2,2.56-2.16,0-3.86-.48-5.11-1.44Z" />
                    <path d="M358.78,261.3c-1.78-.94-3.82-1.4-6.12-1.4-2.88,0-5.1,.55-6.66,1.66-1.56,1.1-2.75,2.47-3.56,4.1h-1.15c-.82-1.68-2.03-3.06-3.64-4.14s-3.73-1.62-6.37-1.62-4.56,.48-6.05,1.44c-1.49,.96-2.57,2.06-3.24,3.31h-1.15v-4.18h-7.27v35.5h7.42v-21.17c0-2.78,.7-4.92,2.09-6.41,1.39-1.49,3.24-2.23,5.54-2.23,2.16,0,3.83,.59,5,1.76,1.17,1.18,1.76,2.84,1.76,5v23.04h7.42v-21.17c0-2.78,.7-4.92,2.09-6.41,1.39-1.49,3.24-2.23,5.54-2.23,2.16,0,3.83,.59,5,1.76,1.18,1.18,1.76,2.84,1.76,5v23.04h7.42v-23.62c0-2.74-.53-5.03-1.58-6.88-1.06-1.85-2.47-3.24-4.25-4.18Z" />
                    <path d="M422.64,277.68c0-3.74-.79-6.97-2.38-9.68s-3.77-4.81-6.55-6.3c-2.79-1.49-5.95-2.23-9.5-2.23s-6.71,.75-9.47,2.23c-2.76,1.49-4.93,3.59-6.52,6.3s-2.38,5.94-2.38,9.68v1.08c0,3.74,.79,6.98,2.38,9.72,1.58,2.74,3.75,4.84,6.52,6.3,2.76,1.46,5.92,2.2,9.47,2.2s6.72-.73,9.5-2.2c2.78-1.46,4.97-3.56,6.55-6.3,1.58-2.74,2.38-5.98,2.38-9.72v-1.08Zm-7.42,.86c0,3.7-1.02,6.59-3.06,8.68s-4.69,3.13-7.96,3.13-5.84-1.04-7.88-3.13-3.06-4.98-3.06-8.68v-.65c0-3.7,1.02-6.59,3.06-8.68s4.67-3.13,7.88-3.13,5.98,1.04,7.99,3.13c2.02,2.09,3.02,4.98,3.02,8.68v.65Z" />
                    <path d="M451.98,262.17c-2.09-1.2-4.48-1.8-7.16-1.8l-9.97,.1h-7.27v35.5h7.42v-29.13l7.67-.13c2.69,0,4.8,.73,6.34,2.2,1.54,1.46,2.3,3.73,2.3,6.8v20.26h7.42v-20.84c0-3.07-.6-5.7-1.8-7.88-1.2-2.18-2.84-3.88-4.93-5.08Z" />
                    <path d="M490.44,261.73c-2.57-1.51-5.56-2.27-8.96-2.27s-6.59,.76-9.25,2.27c-2.66,1.51-4.74,3.65-6.23,6.41-1.49,2.76-2.23,5.99-2.23,9.68v.86c0,3.65,.76,6.85,2.27,9.61,1.51,2.76,3.61,4.9,6.3,6.41,2.69,1.51,5.83,2.27,9.43,2.27,3.21,0,5.86-.5,7.92-1.51,2.06-1.01,3.73-2.26,5-3.74,1.27-1.49,2.24-2.9,2.92-4.25l-6.12-3.17c-.77,1.63-1.86,3.07-3.28,4.32-1.42,1.25-3.52,1.87-6.3,1.87-2.98,0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3Zm-19.04,12.85c.38-2.69,1.45-4.79,3.2-6.3,1.75-1.51,4.02-2.27,6.8-2.27s5.04,.76,6.77,2.27c1.73,1.51,2.69,3.61,2.88,6.3h-19.66Z" />
                    <path d="M488.51,314.79c-2.57-1.51-5.56-2.27-8.96-2.27s-6.59,.76-9.25,2.27c-2.66,1.51-4.74,3.65-6.23,6.41-1.49,2.76-2.23,5.99-2.23,9.68v.86c0,3.65,.76,6.85,2.27,9.61,1.51,2.76,3.61,4.9,6.3,6.41,2.69,1.51,5.83,2.27,9.43,2.27,3.21,0,5.86-.5,7.92-1.51,2.06-1.01,3.73-2.26,5-3.74,1.27-1.49,2.24-2.9,2.92-4.25l-6.12-3.17c-.77,1.63-1.86,3.07-3.28,4.32-1.42,1.25-3.52,1.87-6.3,1.87-2.98,0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3Zm-19.04,12.85c.38-2.69,1.45-4.79,3.2-6.3,1.75-1.51,4.02-2.27,6.8-2.27s5.04,.76,6.77,2.27c1.73,1.51,2.69,3.61,2.88,6.3h-19.66Z" />
                    <path d="M550.77,333.04c-1.22-1.44-2.89-2.54-5-3.31-2.11-.77-4.44-1.37-6.98-1.8l-2.52-.43c-1.92-.33-3.45-.84-4.57-1.51-1.13-.67-1.69-1.73-1.69-3.17,0-1.34,.58-2.39,1.73-3.13s2.74-1.12,4.75-1.12,3.79,.44,5.18,1.33c1.39,.89,2.3,2.41,2.74,4.57l6.91-1.94c-.77-3.07-2.44-5.51-5-7.31-2.57-1.8-5.84-2.7-9.83-2.7s-7.44,.92-9.94,2.77c-2.5,1.85-3.74,4.45-3.74,7.81,0,2.26,.58,4.1,1.73,5.54,1.15,1.44,2.71,2.57,4.68,3.38,1.97,.82,4.15,1.44,6.55,1.87l2.45,.43c2.35,.43,4.13,.98,5.33,1.66,1.2,.67,1.8,1.73,1.8,3.17s-.64,2.62-1.91,3.53c-1.27,.91-3.08,1.37-5.44,1.37-1.58,0-3.06-.24-4.43-.72-1.37-.48-2.51-1.3-3.42-2.45-.91-1.15-1.56-2.71-1.94-4.68l-6.91,1.66c.67,4.08,2.5,7.13,5.47,9.14,2.98,2.02,6.72,3.02,11.23,3.02s8.02-.98,10.66-2.95c2.64-1.97,3.96-4.73,3.96-8.28,0-2.4-.61-4.32-1.84-5.76Z" />
                    <path d="M503.96,314.46c-1.25,1.3-1.87,3.02-1.87,5.18v29.38h7.42v-27.94c0-1.44,.7-2.16,2.09-2.16h7.32v-6.41h-9.7c-2.25,0-4.01,.65-5.26,1.94Z" />
                </g>
                <path d="M161.38,228.15c-12.4-11.52-29.08-17.28-50.06-17.28s-37.66,5.76-50.06,17.28c-12.4,11.52-18.59,28.01-18.59,49.46v40.05c0,21.45,6.2,37.94,18.59,49.46,12.4,11.52,29.08,17.28,50.06,17.28s37.66-5.76,50.06-17.28c12.4-11.52,18.59-28.01,18.59-49.46v-40.05c0-21.45-6.2-37.94-18.59-49.46Zm-40.19,39.91l-13.68,20.47v2.32h13.68v60.06h-19.5v-82.86h-25.19v-16.71h69.89v16.71h-25.2Z" />
            </svg>
        )
    }

    const Globe = () => {
        return (
            <svg width="40" height="40" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 0H5V2H3V4H1V6H0V8V10V12H1V14H3V16H5V18H7H9H11H13V16H15V14H17V12H18V10V8V6H17V4H15V2H13V0H11H9H7ZM16 12H15V14H13V16H11H9H7H5V14H3V12H2V10V8H3V10H5V12H7V10V8H5V6H7V4H9V2H11H13V4H15V6H12V4H10V6H9V10H11V12V13H12V12H14V10H16V12Z"
                    fill="black"
                />
            </svg>
        )
    }

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 90,
                    background: "white",
                    textTransform: "uppercase",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    fontWeight: "900",
                    fontFamily: "SpaceGrotesk-Regular",
                    justifyContent: "center",
                    flexDirection: "column",
                    paddingLeft: "72px"
                }}
            >
                <img
                    style={{ position: "absolute" }}
                    alt="blob background"
                    // @ts-expect-error
                    src={bgImage}
                    width={1200}
                    height={630}
                />
                <div style={{ display: "flex", width: "100%", height: "40px" }}>
                    <Globe />
                    <p style={{ fontSize: 26, marginTop: "0px", paddingLeft: "16px" }}>info@teamonedevelopers.de</p>
                </div>
                <p style={{ marginTop: "48px", marginBottom: "96px" }}>{title}</p>
                <Logo />
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "SpaceGrotesk",
                    data: fontData
                }
            ]
        }
    )
}
