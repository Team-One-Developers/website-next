'use client';

import { ContentWrapper } from '@/components';
import { BREAKPOINTS, DARK } from '@/constants';
import { SiteMetadata } from '@/data';
import { PageTheme } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import useMedia from 'react-media';
import { useEffect, useState } from 'react';

export const Header = ({ theme }: { theme: PageTheme }) => {
  const [mounted, setMounted] = useState(false);
  const [burgerNavigationOpened, setBurgerNavigationOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLargeScreen = useMedia({ query: `(min-width: ${BREAKPOINTS.lg}px)` });

  return (
    <header
      className={clsx(
        // no explicit to-transparent, see https://tailwindcss.com/docs/gradient-color-stops
        'z-50 sticky top-0 bg-gradient-to-r from-[-20%] to-100% via-[87%] via-t1-transparent',
        theme === DARK ? 'from-t1-black' : 'to-t1-white'
      )}
    >
      <div
        className='w-full h-full absolute backdrop-blur-sm'
        style={{ mask: 'linear-gradient(#1d1d1d 80%, transparent)' }}
      />
      <ContentWrapper>
        {
          // 26px to add up to 32px (the logo is 12px higher than the nav buttons)
        }
        <div className='flex justify-between items-center pt-[1.625rem]'>
          <Link href='/'>
            <div
              className={clsx(
                'grid self-center',
                burgerNavigationOpened && 'burgerNavOpened'
              )}
              style={{ transition: '350ms' }}
            >
              <Image
                src={
                  theme === DARK
                    ? '../../../../images/logo/t1d-logo-negativ.svg'
                    : '../../../../images/logo/t1d-logo.svg'
                }
                alt='Team One Developers Logo'
                placeholder='blur'
                height={46}
              />
            </div>
          </Link>

          {mounted && !isLargeScreen ? (
            <>
              <button
                className='text-t1-black bg-t1-green p-3 rounded-sm shadow-none text-xs cursor-pointer z-50 outline-none border-none self-start font-SpaceGroteskMedium'
                onClick={() => {
                  setBurgerNavigationOpened(true);
                }}
              >
                MENU
              </button>

              {burgerNavigationOpened && (
                <div className='fixed flex justify-end inset-0 z-[60]'>
                  <div
                    className='w-screen h-screen absolute top-0 left-0'
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      transition:
                        'backgroundColor 500ms cubic-bezier(0.77, 0, 0.175, 1) 0s !important',
                    }}
                    onClick={() => {
                      setBurgerNavigationOpened(false);
                    }}
                  />
                  <div
                    className='bg-t1-darkGrey p-0 m-0 h-full overflow-hidden block box-border w-full border-none outline-none z-10 max-w-[568px]'
                    style={{
                      transition:
                        'transform 500ms cubic-bezier(0.77, 0, 0.175, 1) 0s',
                      transform: 'translateX(0px)',
                    }}
                  >
                    <div
                      className='flex flex-col justify-between h-full'
                      style={{
                        paddingLeft: 'max(env(safe-area-inset-left), 2rem)',
                        paddingRight: 'max(env(safe-area-inset-right), 2rem)',
                      }}
                    >
                      <div className='flex-grow text-right p-8 pr-0'>
                        <button
                          className='text-t1-black bg-t1-green p-3 rounded-sm shadow-none text-xs cursor-pointer z-50 outline-none border-none self-start font-SpaceGroteskMedium'
                          onClick={() => {
                            setBurgerNavigationOpened(false);
                          }}
                        >
                          CLOSE
                        </button>
                        <nav className='text-left pt-8 font-SpaceGroteskRegular'>
                          {SiteMetadata.menuLinks.map((linkObj, index) => {
                            return (
                              <BurgerNavigationLink
                                key={index}
                                activeClassName='active'
                                to={`${linkObj.link}`}
                              >
                                {linkObj.name}
                              </BurgerNavigationLink>
                            );
                          })}
                        </nav>
                      </div>

                      <div className='self-end text-white p-8'>
                        <p>kontakt@t1dev.de</p>
                        <p>+49 711 252 98 690</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <nav className='flex z-40 gap-2'>
              {SiteMetadata.menuLinks.map((linkObj, index) => {
                return (
                  <NavigationLink
                    key={index}
                    activeClassName='active'
                    to={`${linkObj.link}`}
                  >
                    {linkObj.name}
                  </NavigationLink>
                );
              })}
            </nav>
          )}
        </div>
      </ContentWrapper>
    </header>
  );
};

const BurgerNavigationLink = styled(Link)`
  text-transform: uppercase;
  color: ${COLORS.white};
  display: block;
  // text-align: right;
  margin-bottom: ${SPACES.ml}px;
  overflow: hidden;

  font-size: 2rem;

  &.active {
    color: ${COLORS.green};
    background-color: ${COLORS.darkGrey};
  }

  &:hover {
    color: ${COLORS.green};
    background-color: ${COLORS.darkGrey};
  }
`;

const NavigationLink = styled(Link)`
  font-family: 'Space Grotesk Regular';
  cursor: pointer;
  border-radius: 3px;
  padding: 10px 14px;

  color: ${COLORS.darkGrey};
  background-color: ${COLORS.green};
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  transition: background-color 250ms linear;

  &.active {
    color: ${COLORS.green};
    background-color: ${COLORS.darkGrey};
  }

  &:hover {
    box-shadow: 0px 0px 10px rgba(70, 255, 173, 0.77);
  }
`;
