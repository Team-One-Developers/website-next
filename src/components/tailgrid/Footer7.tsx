import { Button } from "@/components/atoms/Button"
import { ContactLink } from "@/components/atoms/ContactLink"
import Link from "next/link"
import { ReactNode } from "react"
import { Section } from "../layout/Section"

const Footer7 = () => {
    return (
        <footer className="relative z-10 bg-background">
            <Section className="py-4 md:py-4">
                <div className="border-b border-foreground/20 pb-10 pt-[70px]">
                    <div className="flex flex-col items-center lg:flex-row">
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="mb-5 w-full">
                                <h3 className="text-2xl font-bold text-foreground sm:text-[28px] sm:leading-snug">
                                    Signup for latest news and insights
                                </h3>
                            </div>
                        </div>
                        <div className="flex w-full px-4 lg:w-1/2">
                            <div className="w-full">
                                <form className="flex flex-wrap items-center justify-center gap-2 xl:justify-end">
                                    <div className="relative w-full xl:max-w-[370px]">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="h-[52px] w-full rounded-sm border border-foreground/50 bg-foreground/5 pl-14 pr-5 text-foreground placeholder-foreground/50 outline-none focus:border-foreground focus-visible:shadow-none"
                                        />
                                        <label className="absolute left-5 top-1/2 -translate-y-1/2">
                                            <svg
                                                width="18"
                                                height="13"
                                                viewBox="0 0 18 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.3052 0H1.69481C0.75974 0 0 0.799055 0 1.78251V11.2175C0 12.2009 0.75974 13 1.69481 13H16.3052C17.2403 13 18 12.2009 18 11.2175V1.78251C18 0.799055 17.2403 0 16.3052 0ZM16.3052 1.07565C16.4513 1.07565 16.5682 1.10638 16.6851 1.19858L9.40909 5.83924C9.1461 5.99291 8.8539 5.99291 8.59091 5.83924L1.31494 1.19858C1.43182 1.13712 1.5487 1.07565 1.69481 1.07565H16.3052ZM16.3052 11.8936H1.69481C1.34416 11.8936 1.02273 11.5863 1.02273 11.1868V2.27423L8.03572 6.76123C8.32792 6.94563 8.64935 7.03782 8.97078 7.03782C9.29221 7.03782 9.61364 6.94563 9.90584 6.76123L16.9188 2.27423V11.1868C16.9773 11.5863 16.6558 11.8936 16.3052 11.8936Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </label>
                                    </div>
                                    <Button className="h-[52px] w-full items-center md:w-full xl:w-fit" color="black">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="py-4 md:py-4">
                <div className="flex justify-between">
                    <LinkGroup header="Pages">
                        <NavLink link="/" label="Home" />
                        <NavLink link="/services" label="Leistungen" />
                        <NavLink link="/culture" label="Kultur" />
                        <NavLink link="/blog" label="Blog" />
                        <NavLink link="/career" label="Karriere" />
                        <NavLink link="/contact" label="Kontakt" />
                    </LinkGroup>

                    <LinkGroup header="Leistungen">
                        <NavLink link="/services" label="Software Engineering" />
                        <NavLink link="/services" label="AI & Data Analysis" />
                        <NavLink link="/services" label="Strategy & Transformation" />
                    </LinkGroup>

                    <LinkGroup header="Pages">
                        <NavLink link="/" label="Home" />
                        <NavLink link="/services" label="Leistungen" />
                        <NavLink link="/culture" label="Kultur" />
                        <NavLink link="/blog" label="Blog" />
                        <NavLink link="/career" label="Karriere" />
                        <NavLink link="/contact" label="Kontakt" />
                    </LinkGroup>

                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 2xl:w-fit">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-foreground">Kontakt</h4>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <ContactLink
                                        type="email"
                                        className="flex items-center gap-3 text-base leading-loose text-foreground/70 hover:underline"
                                    >
                                        <span className="">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17.5 3H2.5C1.4375 3 0.53125 3.875 0.53125 4.96875V15.0937C0.53125 16.1562 1.40625 17.0625 2.5 17.0625H17.5C18.5625 17.0625 19.4687 16.1875 19.4687 15.0937V4.9375C19.4687 3.875 18.5625 3 17.5 3ZM17.5 4.40625C17.5312 4.40625 17.5625 4.40625 17.5937 4.40625L10 9.28125L2.40625 4.40625C2.4375 4.40625 2.46875 4.40625 2.5 4.40625H17.5ZM17.5 15.5938H2.5C2.1875 15.5938 1.9375 15.3438 1.9375 15.0312V5.78125L9.25 10.4688C9.46875 10.625 9.71875 10.6875 9.96875 10.6875C10.2187 10.6875 10.4687 10.625 10.6875 10.4688L18 5.78125V15.0625C18.0625 15.375 17.8125 15.5938 17.5 15.5938Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        info@teamonedevelopers.de
                                    </ContactLink>
                                </li>

                                <li>
                                    <ContactLink
                                        type="phone"
                                        className="flex items-center gap-3 text-base leading-loose text-foreground/70 hover:underline"
                                    >
                                        <span className="">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_941_16343)">
                                                    <path
                                                        d="M15.1875 19.4688C14.3437 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84374 16.375 5.74999 14.2813C3.65624 12.1875 2.03124 9.84377 1.18749 7.68752C0.249989 5.37502 0.343739 3.46877 1.43749 2.40627C1.46874 2.37502 1.53124 2.34377 1.56249 2.31252L4.18749 0.750025C4.84374 0.375025 5.68749 0.562525 6.12499 1.18752L7.96874 3.93753C8.40624 4.59378 8.21874 5.46877 7.59374 5.90627L6.46874 6.68752C7.28124 8.00002 9.59374 11.2188 13.2812 13.5313L13.9687 12.5313C14.5 11.7813 15.3437 11.5625 16.0312 12.0313L18.7812 13.875C19.4062 14.3125 19.5937 15.1563 19.2187 15.8125L17.6562 18.4375C17.625 18.5 17.5937 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37499 3.46878C1.78124 4.12503 1.81249 5.46877 2.49999 7.18752C3.28124 9.15627 4.78124 11.3125 6.74999 13.2813C8.68749 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8437 18.2188 16.5312 17.625L18.0312 15.0625C18.0312 15.0313 18.0312 15.0313 18.0312 15L15.2812 13.1563C15.2812 13.1563 15.2187 13.1875 15.1562 13.2813L14.4687 14.2813C14.0312 14.9063 13.1875 15.0938 12.5625 14.6875C8.62499 12.25 6.18749 8.84377 5.31249 7.46877C4.90624 6.81252 5.06249 5.96878 5.68749 5.53128L6.81249 4.75002V4.71878L4.96874 1.96877C4.96874 1.93752 4.93749 1.93752 4.90624 1.96877L2.37499 3.46878Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M18.3125 8.90633C17.9375 8.90633 17.6562 8.62508 17.625 8.25008C17.375 5.09383 14.7812 2.56258 11.5937 2.34383C11.2187 2.31258 10.9062 2.00008 10.9375 1.59383C10.9687 1.21883 11.2812 0.906333 11.6875 0.937583C15.5625 1.18758 18.7187 4.25008 19.0312 8.12508C19.0625 8.50008 18.7812 8.84383 18.375 8.87508C18.375 8.90633 18.3437 8.90633 18.3125 8.90633Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_941_16343">
                                                        <rect width="20" height="20" fill="currentColor" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        +49 711 252 98 690
                                    </ContactLink>
                                </li>

                                <li>
                                    <ContactLink
                                        type="address"
                                        className="flex items-center gap-3 text-base leading-loose text-foreground/70 hover:underline"
                                    >
                                        <span className="">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10 0.5625C5.6875 0.5625 2.1875 3.9375 2.1875 8.09375C2.1875 11.25 6.375 16.25 8.84375 18.9375C9.15625 19.2813 9.5625 19.4375 10 19.4375C10.4375 19.4375 10.8438 19.25 11.1562 18.9375C13.625 16.25 17.8125 11.25 17.8125 8.09375C17.8125 3.9375 14.3125 0.5625 10 0.5625ZM10.125 18C10.0625 18.0625 9.96875 18.0625 9.875 18C6.84375 14.6875 3.59375 10.375 3.59375 8.09375C3.59375 4.71875 6.46875 1.96875 10 1.96875C13.5312 1.96875 16.4062 4.71875 16.4062 8.09375C16.4062 10.375 13.1562 14.6875 10.125 18Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M10 4.90625C8.125 4.90625 6.59375 6.4375 6.59375 8.3125C6.59375 10.1875 8.125 11.75 10 11.75C11.875 11.75 13.4062 10.2188 13.4062 8.34375C13.4062 6.46875 11.875 4.90625 10 4.90625ZM10 10.3438C8.875 10.3438 8 9.4375 8 8.34375C8 7.25 8.90625 6.34375 10 6.34375C11.0937 6.34375 12 7.25 12 8.34375C12 9.4375 11.125 10.3438 10 10.3438Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        Stafflenbergstraße 44 <br /> 70184 Stuttgart
                                    </ContactLink>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Link
                                href="https://www.instagram.com/teamonedevelopers/"
                                className="rounded-full border border-transparent p-3 text-foreground hover:border-foreground hover:bg-foreground/5"
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18" className="fill-current">
                                    <path d="M8.91688 12.4995C10.6918 12.4995 12.1306 11.0911 12.1306 9.35385C12.1306 7.61655 10.6918 6.20819 8.91688 6.20819C7.14197 6.20819 5.70312 7.61655 5.70312 9.35385C5.70312 11.0911 7.14197 12.4995 8.91688 12.4995Z" />
                                    <path d="M12.4078 0.947388H5.37075C2.57257 0.947388 0.300781 3.17104 0.300781 5.90993V12.7436C0.300781 15.5367 2.57257 17.7604 5.37075 17.7604H12.3524C15.2059 17.7604 17.4777 15.5367 17.4777 12.7978V5.90993C17.4777 3.17104 15.2059 0.947388 12.4078 0.947388ZM8.91696 13.4758C6.56206 13.4758 4.70584 11.6047 4.70584 9.35389C4.70584 7.10312 6.58976 5.23199 8.91696 5.23199C11.2165 5.23199 13.1004 7.10312 13.1004 9.35389C13.1004 11.6047 11.2442 13.4758 8.91696 13.4758ZM14.735 5.61164C14.4579 5.90993 14.0423 6.07264 13.5714 6.07264C13.1558 6.07264 12.7402 5.90993 12.4078 5.61164C12.103 5.31334 11.9368 4.9337 11.9368 4.47269C11.9368 4.01169 12.103 3.65916 12.4078 3.33375C12.7125 3.00834 13.1004 2.84563 13.5714 2.84563C13.9869 2.84563 14.4302 3.00834 14.735 3.30663C15.012 3.65916 15.2059 4.06593 15.2059 4.49981C15.1782 4.9337 15.012 5.31334 14.735 5.61164Z" />
                                    <path d="M13.5985 3.82184C13.2383 3.82184 12.9336 4.12013 12.9336 4.47266C12.9336 4.82519 13.2383 5.12349 13.5985 5.12349C13.9587 5.12349 14.2634 4.82519 14.2634 4.47266C14.2634 4.12013 13.9864 3.82184 13.5985 3.82184Z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/team-one-developers/"
                                className="rounded-full border border-transparent p-3 text-foreground hover:border-foreground hover:bg-foreground/5"
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18" className="fill-current">
                                    <path d="M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
            <div className="w-full bg-primary">
                <Section className="py-4 md:py-4">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                            <div className="my-1 flex justify-center md:justify-start">
                                <p className="font-spacegrotesk text-base text-foreground">
                                    &copy; {new Date().getFullYear()} Team One
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                            <div className="my-1">
                                <div className="flex flex-wrap items-center justify-center md:justify-end">
                                    <BottomNavLink link="/privacy" label="Datenschutz" />
                                    <BottomNavLink link="/legal-notice" label="Impressum" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </footer>
    )
}

export default Footer7

const LinkGroup = ({ children, header }: { children: ReactNode; header: string }) => {
    return (
        <div className="w-full px-4 sm:w-1/2 lg:w-3/12 2xl:w-2/12">
            <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-foreground"> {header} </h4>
                <ul className="space-y-3">{children}</ul>
            </div>
        </div>
    )
}

const NavLink = ({ label, link }: { label: string; link: string }) => {
    return (
        <li>
            <Link
                href={link}
                className="inline-block text-base leading-loose text-foreground/70 underline-offset-2 hover:text-foreground hover:underline"
            >
                {label}
            </Link>
        </li>
    )
}

const BottomNavLink = ({ label, link }: { label: string; link: string }) => {
    return (
        <Link href={link} className="px-3 text-base text-foreground hover:underline">
            {label}
        </Link>
    )
}
