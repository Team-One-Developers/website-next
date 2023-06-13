'use client';

import { PAGE_THEME } from '@/constants';
import { SiteMetadata } from '@/data';
import { PageTheme } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const Header = ({ theme }: { theme: PageTheme }) => {
  const [mounted, setMounted] = useState(false);
  const [burgerNavigationOpened, setBurgerNavigationOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLargeScreen = true;

  // useMedia({ query: `(min-width: ${BREAKPOINTS.lg}px)` });

  return (
    <header
      className={'z-50 sticky top-0'}
      style={{
        backgroundImage: `linear-gradient(var(--t1-${
          theme === PAGE_THEME.dark ? 'black' : 'lightGrey'
        }) -20%, transparent 87%, transparent 98%, transparent 100%)`,
      }}
    >
      <div
        className='w-full h-full absolute backdrop-blur-sm -z-10'
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
                  theme === PAGE_THEME.dark
                    ? '/images/logo/t1d-logo-negativ.svg'
                    : '/images/logo/t1d-logo.svg'
                }
                alt='Team One Developers Logo'
                height={46}
                width={135}
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
                              <Link
                                className='uppercase text-t1-white block mb-8 overflow-hidden text-3xl hover:bg-t1-darkGrey hover:text-t1-green active:bg-t1-darkGrey active:text-t1-green '
                                key={index}
                                href={`${linkObj.link}`}
                              >
                                {linkObj.name}
                              </Link>
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
                  <Link
                    className='leading-[14px] cursor-pointer rounded-[3px] bg-t1-green no-underline text-sm uppercase text-t1-darkGrey font-SpaceGroteskRegular py-[10px] px-[14px] active:text-t1-green active:bg-t1-darkGrey'
                    key={index}
                    href={`${linkObj.link}`}
                    style={{
                      transition: 'background-color 250ms linear',
                    }}
                  >
                    {linkObj.name}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </ContentWrapper>
    </header>
  );
};
