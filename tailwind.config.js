/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  important: true,
  content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/content/**/*.{md,mdx}",
      "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      // override fontsizes to remove added lineheights that usually come with these classes as we use a shitton of special lineheighs
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
          "2xl": "1400px"
      },
      extend: {
          lineHeight: {
              84: "84%",
              95: "95%",
              97: "97%",
              110: "110%",
              115: "115%",
              130: "130%",
              140: "140%",
              144: "144%",
              150: "150%"
          },
          typography: {
              DEFAULT: {
                  css: {
                      p: {
                          color: "var(--theme-foreground)"
                      },
                      h2: {
                          color: "var(--theme-foreground)"
                      },
                      ul: {
                          "list-style": "square",
                          color: "var(--theme-foreground)"
                      },
                      li: {
                          color: "var(--theme-foreground)"
                      },
                      "li::marker": {
                          color: "var(--theme-foreground)"
                      }
                  }
              }
          },
          letterSpacing: {
              tinyBitTighter: "-0.005em"
          },
          borderRadius: {
              blog: "20px"
          },
          fontSize: {
              "2xs": "0.6rem"
          },
          boxShadow: {
              t1glow: "0px 0px 10px var(--theme-primary)"
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
              accent: {
                  foreground: "var(--theme-accent-foreground)"
              },
              muted: {
                  DEFAULT: "var(--theme-muted-foreground)",
                  dark: "var(--theme-muted-dark)"
              },
              card: {
                  DEFAULT: "var(--theme-card)",
                  foreground: "var(--theme-card-forground)"
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
