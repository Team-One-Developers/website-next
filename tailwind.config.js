/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        // override fontsizes to remove added lineheights that usually come with these classes as we use a shitton of special lineheighs
        fontSize: {
            "2xs": "0.6875rem",
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "2.5xl": "1.75rem",
            "3xl": "1.875rem",
            "3.5xl": "2rem",
            "4xl": "2.25rem",
            "4.5xl": "2.75rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem",
            "10xl": "11rem"
        },
        fontFamily: {
            abcdiatype: "var(--font-ABCD)",
            spacegrotesk: "var(--font-SpaceGrotesk)"
        },
        screens: {
            xs: "0px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1400px",
            "3xl": "1700px",
            "4xl": "1921px"
        },
        extend: {
            lineHeight: {
                100: "100%",
                110: "110%",
                120: "120%",
                130: "130%",
                140: "140%",
                150: "150%"
            },
            letterSpacing: {
                tinyBitTighter: "-0.005em"
            },
            borderRadius: {
                sm: "3px",
                blog: "20px"
            },
            fontSize: {
                "2xs": "0.6rem"
            },
            boxShadow: {
                t1glow: "0px 0px 10px rgba(70,255,173,0.77)"
            },
            colors: {
                t1: {
                    darkGray: "var(--t1-darkGray)",
                    black: "var(--black)",
                    darkGreen: "var(--t1-darkGreen)"
                },
                background: "var(--theme-background)",
                primary: {
                    DEFAULT: "var(--theme-primary)",
                    foreground: "var(--theme-primary-foreground)"
                },
                muted: {
                    DEFAULT: "var(--theme-muted-foreground)",
                    dark: "var(--theme-muted-dark)"
                },
                foreground: {
                    DEFAULT: "var(--theme-foreground)",
                    hover: "var(--theme-foreground-hover)"
                }
            },
            backgroundImage: (theme) => ({
                header_gradient:
                    "linear-gradient(var(--theme-background) -20%, transparent 87%, transparent 98%, transparent 100%)"
            })
        }
    },
    plugins: [
        function ({ addUtilities, addComponents, e, prefix, config }) {
            const newUtilities = {
                ".horizontal-tb": {
                    writingMode: "horizontal-tb"
                },
                ".vertical-rl": {
                    writingMode: "vertical-rl"
                },
                ".vertical-lr": {
                    writingMode: "vertical-lr"
                }
            }
            addUtilities(newUtilities)
        },
        require("@tailwindcss/typography")
    ]
}
