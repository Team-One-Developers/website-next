export const SiteMetadata = {
    title: "Team One Developers - Partner für agile Produktentwicklung",
    siteUrl: "http://www.teamonedevelopers.de",
    description:
        "Wir sind die Technologieberatung für agile Produktentwicklung. Mit unserer jahrelangen Expertise gestalten wir Produkte und digitalisieren Geschäftsprozesse unserer Kunden.",
    menuLinks:
        process.env.NEXT_PUBLIC_RENDER_UNFINISHED === "TRUE"
            ? [
                  {
                      name: "Home",
                      link: "/"
                  },
                  {
                      name: "Leistungen",
                      link: "/services"
                  },
                  {
                      name: "Kultur",
                      link: "/culture"
                  },
                  {
                      name: "Blog",
                      link: "/blog"
                  },
                  {
                      name: "Karriere",
                      link: "/career"
                  },
                  {
                      name: "Kontakt",
                      link: "/contact"
                  }
              ]
            : [
                  {
                      name: "Home",
                      link: "/"
                  },
                  {
                      name: "Leistungen",
                      link: "/services"
                  },
                  {
                      name: "Kultur",
                      link: "/culture"
                  },
                  {
                      name: "Karriere",
                      link: "/career"
                  },
                  {
                      name: "Kontakt",
                      link: "/contact"
                  }
              ]
}
