'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PAGE_THEME } from '@/constants'
import { SiteMetadata } from '@/data'
import { PageTheme } from '@/types'
import { twJoin } from 'tailwind-merge'

import { ContentWrapper } from './ContentWrapper'

export const Header = ({ theme }: { theme: PageTheme }) => {
  const [burgerNavigationOpened, setBurgerNavigationOpened] = useState(false)

  const pathname = usePathname()

  return (
    <header className={'sticky top-0 z-50 bg-header_gradient'}>
      <div
        className="absolute -z-10 h-full w-full backdrop-blur-sm"
        style={{ mask: 'linear-gradient(#1d1d1d 80%, transparent)' }}
      />
      <ContentWrapper>
        {
          // 26px to add up to 32px (the logo is 12px higher than the nav buttons)
        }
        <div className="flex items-center justify-between pt-[1.625rem]">
          <Link href="/">
            <div
              className={twJoin(
                'grid self-center duration-300',
                burgerNavigationOpened && 'burgerNavOpened'
              )}
            >
              <Image
                src={
                  theme === PAGE_THEME.dark
                    ? '/images/logo/t1d-logo-negativ.svg'
                    : '/images/logo/t1d-logo.svg'
                }
                alt="Team One Developers Logo"
                height={46}
                width={135}
              />
            </div>
          </Link>

          <div className="lg:hidden">
            <button
              className="z-50 cursor-pointer select-none self-start rounded-[3px] border-none bg-t1-green px-[14px] py-[10px] font-SpaceGroteskRegular text-sm leading-[14px] text-t1-black shadow-none outline-none"
              onClick={() => {
                setBurgerNavigationOpened(true)
              }}
            >
              MENU
            </button>

            {burgerNavigationOpened && (
              <div className="fixed inset-0 z-[60] flex justify-end">
                <div
                  className="absolute left-0 top-0 h-screen w-screen"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    transition:
                      'backgroundColor 500ms cubic-bezier(0.77, 0, 0.175, 1) 0s !important',
                  }}
                  onClick={() => {
                    setBurgerNavigationOpened(false)
                  }}
                />
                <div
                  className="z-10 m-0 box-border block h-full w-full max-w-[568px] overflow-hidden border-none bg-t1-darkGray p-0 outline-none"
                  style={{
                    transition:
                      'transform 500ms cubic-bezier(0.77, 0, 0.175, 1) 0s',
                    transform: 'translateX(0px)',
                  }}
                >
                  <div
                    className="flex h-full flex-col justify-between"
                    style={{
                      paddingLeft: 'max(env(safe-area-inset-left), 2rem)',
                      paddingRight: 'max(env(safe-area-inset-right), 2rem)',
                    }}
                  >
                    <div className="flex-grow p-8 pr-0 text-right">
                      <button
                        className="z-50 cursor-pointer select-none self-start rounded-[3px] border-none bg-t1-green px-[14px] py-[10px] font-SpaceGroteskRegular text-sm leading-[14px] text-t1-black shadow-none outline-none"
                        onClick={() => {
                          setBurgerNavigationOpened(false)
                        }}
                      >
                        CLOSE
                      </button>
                      <nav className="pt-8 text-left font-SpaceGroteskRegular">
                        {SiteMetadata.menuLinks.map((linkObj, index) => {
                          return (
                            <Link
                              className={twJoin(
                                'mb-8 block select-none overflow-hidden text-3xl uppercase hover:text-t1-green active:text-t1-green ',
                                pathname === linkObj.link
                                  ? 'text-t1-green'
                                  : 'text-t1-white'
                              )}
                              key={index}
                              href={`${linkObj.link}`}
                            >
                              {linkObj.name}
                            </Link>
                          )
                        })}
                      </nav>
                    </div>

                    <div className="self-end p-8 text-white">
                      <p>kontakt@t1dev.de</p>
                      <p>+49 711 252 98 690</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <nav className="z-40 hidden gap-2 lg:flex">
            {SiteMetadata.menuLinks.map((linkObj, index) => {
              return (
                <Link
                  className={twJoin(
                    'cursor-pointer select-none rounded-[3px] px-[14px] py-[10px] font-SpaceGroteskRegular text-sm uppercase leading-[14px] no-underline shadow-md hover:shadow-navLinkShadow active:bg-t1-darkGray active:text-t1-green',
                    pathname === linkObj.link
                      ? 'bg-t1-darkGray text-t1-green'
                      : 'bg-t1-green text-t1-darkGray'
                  )}
                  key={index}
                  href={`${linkObj.link}`}
                  style={{
                    transition: 'background-color 250ms linear',
                  }}
                >
                  {linkObj.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </ContentWrapper>
    </header>
  )
}

export default Header
